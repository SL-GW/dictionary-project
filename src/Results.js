import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    const { partOfSpeech, definition, example, synonyms, antonyms } =
      props.results;
    return (
      <div className="Results">
        <Meaning
          partOfSpeech={partOfSpeech}
          definition={definition}
          example={example}
          synonyms={synonyms}
          antonyms={antonyms}
        />
      </div>
    );
  } else {
    return null;
  }
}
