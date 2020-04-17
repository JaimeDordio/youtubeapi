import React, { useState, useEffect } from "react";
import axios from "axios";
import cloneDeep from "clone-deep";

const Header = (props) => {
  const [urlState, setUrlState] = useState({
    baseURL: "https://www.googleapis.com/youtube/v3/search",
    maxResults: 5,
    q: "",
  });
  const [resultsState, setResultsState] = useState(null);

  useEffect(() => {
    if (urlState.q !== "") {
      axios
        .get(urlState.baseURL, {
          params: {
            key: process.env.REACT_APP_KEY,
            part: "snippet",
            maxResults: urlState.maxResults,
            q: urlState.q,
          },
        })
        .then((res) => {
          console.log(res);
          setResultsState(res.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setResultsState(null);
    }
  }, [urlState.q]);

  const onInputChange = () => {
    const newState = cloneDeep(urlState);
    newState.q = document.getElementById("search").value;
    setUrlState(newState);
  };

  return (
    <div>
      <input
        type="text"
        name="Search"
        id="search"
        onChange={() => onInputChange()}
      />

      {resultsState ? (
        <div>
          {resultsState.map((item) => {
            console.log(item);
            return <div key={item.etag}>{item.snippet.title}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Header;
