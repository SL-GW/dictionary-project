import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
    console.log(response.data.meanings[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "c7eebf8ff7o8d23ac85774cb72ct0a65";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
