import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = (props) => {
  const { selectedVideo, setSelectedVideoState } = props;

  const [relatedVideosState, setRelatedVideosState] = useState(null);

  useEffect(() => {
    console.log("Inside useEffect");
    console.log("selectedVideo", selectedVideo);
    if (selectedVideo) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: process.env.REACT_APP_KEY,
            part: "snippet",
            relatedToVideoId: selectedVideo.id.videoId,
            type: "video",
          },
        })
        .then((res) => {
          console.log(res);
          setRelatedVideosState(res.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [selectedVideo]);

  return selectedVideo ? (
    <div style={{ backgroundColor: "#040404" }}>
      <iframe
        style={{ maxWidth: "1100px", margin: "10px auto", padding: "25px 5px" }}
        title="youtubePlayer"
        id="player"
        type="text/html"
        width="640"
        height="360"
        src={`http://www.youtube.com/embed/${selectedVideo.id.videoId}?enablejsapi=1&autoplay=1`}
        frameBorder="0"
      ></iframe>

      {relatedVideosState ? (
        <div
          style={{
            width: "fit-content",
            display: "flex",
            placeContent: "space-around",
            flexFlow: "row wrap",
            margin: "10px auto",
            padding: "25px 5px",
          }}
        >
          {relatedVideosState.map((item) => {
            return (
              <div
                style={{
                  width: "320px",
                  height: "fit-content",
                  marginBottom: "50px",
                }}
                onClick={(e) => setSelectedVideoState(item)}
              >
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                />
                <p style={{ color: "#DEDEDE", textAlign: "left" }}>
                  {item.snippet.title}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  ) : null;
};

export default Content;
