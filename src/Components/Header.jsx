import React, { useState, useEffect } from "react";
import axios from "axios";

import { HeaderStyle } from "./Styles/HeaderStyle";
import { SearchInput } from "./Styles/SearchInput";
import { DropdownList } from "./Styles/DropdownList";
import { DropdownItem } from "./Styles/DropdownItem";

const Header = (props) => {
  const { setSelectedVideoState } = props;

  const [searchState, setSearchState] = useState(null);
  const [resultsState, setResultsState] = useState(null);
  const [dropdownViewState, setDropdownViewState] = useState(false);

  useEffect(() => {
    if (searchState) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: process.env.REACT_APP_KEY,
            part: "snippet",
            maxResults: 5,
            q: searchState,
          },
        })
        .then((res) => {
          console.log(res);
          setResultsState(res.data.items);
          setDropdownViewState(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [searchState]);

  return (
    <HeaderStyle>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "flex",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            return setSearchState(document.getElementById("search").value);
          }}
        >
          <SearchInput
            type="text"
            name="Search"
            id="search"
            placeholder="🔎 How to develop..."
          />
          <button
            style={{
              marginLeft: "15px",
              borderRadius: "5px",
              padding: "8px 15px",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>

        {resultsState !== "" && resultsState !== null && dropdownViewState ? (
          <DropdownList>
            {resultsState.map((item) => {
              return (
                <DropdownItem
                  key={item.id.videoId}
                  onClick={() => {
                    setDropdownViewState(false);
                    setSelectedVideoState(item);
                  }}
                >
                  <div className="thumbnail__container">
                    <img
                      src={item.snippet.thumbnails.medium.url}
                      alt={item.snippet.title}
                    />
                  </div>
                  <div className="info__container">
                    <h1>{item.snippet.title}</h1>
                    <h2>{item.snippet.channelTitle}</h2>
                    <p>{item.snippet.description}</p>
                  </div>
                </DropdownItem>
              );
            })}
          </DropdownList>
        ) : null}
      </div>
    </HeaderStyle>
  );
};

export default Header;
