import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                <img
                  className="img-fluid"
                  src={photo.src.landscape}
                  key={index}
                  alt="dictionary"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
