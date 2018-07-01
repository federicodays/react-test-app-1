import React from "react";
import ReactDOM from 'react-dom';

class ErrorMessageInput extends React.Component {
  constructor(props){
    super(props);
  }

  handleChange(e) {
    this.props.onErrorTextChange(e.target.value);
  }

  render() {

    // if popup is shown, the input will be disabled
    const inputIsDisable = this.props.showPopupStatus;

    return(
      <div>
        <h1>Type a custom message error and test it:</h1>
        <input disabled={inputIsDisable} type="text" onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }

};

export default ErrorMessageInput;