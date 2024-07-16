import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {props.definition}
      </p>
      {props.example && (
        <p>
          <strong>Example:</strong> {props.example}
        </p>
      )}
      {props.synonyms && props.synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {props.synonyms.join(", ")}
        </p>
      )}
      {props.antonyms && props.antonyms.length > 0 && (
        <p>
          <strong>Antonyms:</strong> {props.antonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
