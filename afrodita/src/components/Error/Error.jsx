import React from "react";
import errorImage from "../../assets/error.jpg";
import "./Error.css";

const Error = ({ message }) => {
  return (
    <div>
      <picture>
        <img src={errorImage} alt="Error 404" />
        <p>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                {message}
            </div>
        </p>
      </picture>
    </div>
  );
};

export default Error;