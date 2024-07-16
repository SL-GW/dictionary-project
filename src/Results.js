import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    const { partOfSpeech, definition, example, synonyms, antonyms } =
      props.results;
    return (
      <div className="Results">
        <div>
          <h3>{partOfSpeech}</h3>
          <p>
            <strong>Definition:</strong> {definition}
          </p>
          {example && (
            <p>
              <strong>Example:</strong> {example}
            </p>
          )}
          {synonyms && synonyms.length > 0 && (
            <p>
              <strong>Synonyms:</strong> {synonyms.join(", ")}
            </p>
          )}
          {antonyms && antonyms.length > 0 && (
            <p>
              <strong>Antonyms:</strong> {antonyms.join(", ")}
            </p>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
