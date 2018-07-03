import React from "react";

const ErrorMessageInput = props => {

  // if popup is shown, input will be disabled.
  const inputDisabled = props.showPopup;

  return(
    <div>
      <h1>Type a custom error message:</h1>
      <input type="text" onChange={(e) => props.updateErrorMessage(e.target.value)} disabled={inputDisabled} />
    </div>
  );
};

export default ErrorMessageInput;