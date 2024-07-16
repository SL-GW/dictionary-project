import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiKey = "c7eebf8ff7o8d23ac85774cb72ct0a65";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${apiKey}`;
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  function handleResponse(response) {
    setResults(response.data.meanings[0]);
  }

  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleKeyWordChange(event) {
    console.log(event.target.value);
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter word"
          onChange={handleKeyWordChange}
        />
      </form>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
