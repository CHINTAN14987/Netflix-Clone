import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovie} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovie} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovie} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentryMovie} />
    </div>
  );
}

export default App;
