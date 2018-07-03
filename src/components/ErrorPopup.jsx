import React from "react";

const ErrorPopup = (props) => {
  return (
    <div className="error-popup">
      <div className="error-popup__error-message">{props.errorMessage}</div>
      <div className="error-popup__footer">
        <a href="http://www.federicogiorni.com" onClick={(e) => {e.preventDefault(); (props.closePopup())}}>Close (x)</a>
      </div>
    </div>
  );
};

export default ErrorPopup;