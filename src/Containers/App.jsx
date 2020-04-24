import React, { useState } from "react";
import Header from "../Components/Header";
import Content from "../Components/Content";

import "./App.css";

const App = () => {
  const [selectedVideoState, setSelectedVideoState] = useState(null);


  return (
    <div className="App">
      <Header setSelectedVideoState={setSelectedVideoState} />
      <Content
        selectedVideo={selectedVideoState}
        setSelectedVideoState={setSelectedVideoState}
      />
    </div>
  );
};

export default App;
