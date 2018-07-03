import React from "react";

import ErrorMessageInput from "./ErrorMessageInput";
import ErrorPopup from "./ErrorPopup";

class Root extends React.Component {

  constructor() {
    super();
    this.updateErrorMessage = this.updateErrorMessage.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);

    this.state = {errorMessage: '', popupIsDisplayed: false};
  }

  updateErrorMessage(message) {
    this.setState({errorMessage: message});
  }

  errorMessageIsPresent(message){
    return message ? true : false;
  }

  openPopup() {
    this.setState({popupIsDisplayed: true});
  }

  closePopup() {
    this.setState({popupIsDisplayed: false});
  }

  render() {
    const errorMessage = this.state.errorMessage;
    const showPopup = this.state.popupIsDisplayed;

    let popup;

    if (showPopup === true) {
      popup = <ErrorPopup closePopup={this.closePopup} errorMessage={errorMessage} />;
    }

    return(
      <div>
        <ErrorMessageInput updateErrorMessage={this.updateErrorMessage} showPopup={showPopup} />
        <button onClick={this.openPopup} disabled={!this.errorMessageIsPresent(errorMessage)}>Show error popuop</button>
        <div>{popup}</div>
      </div>
    );
  }
}

export default Root;