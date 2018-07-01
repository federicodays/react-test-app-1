import React from "react";

import ErrorMessageInput from "./ErrorMessageInput";
import ErrorPopup from "./ErrorPopup";

class Root extends React.Component {

  constructor() {
    super();
    this.updateErrorText = this.updateErrorText.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.state = {errorText: '', errorPopupIsActive: false};
  }

  updateErrorText(text) {
    this.setState({errorText: text});
  }

  openPopup() {
   this.setState({errorPopupIsActive: true});
  }

  closePopup() {
    this.setState({errorPopupIsActive: false});
  }

  errorTextIsPresent(msg){
    return msg ? true : false;
  }

  render() {
    const errorText = this.state.errorText;
    const showPopup = this.state.errorPopupIsActive;
    let popup;

    if (showPopup === true) {
      popup = <ErrorPopup onClosePopup={this.closePopup} errorMessage={errorText} />;
    }

    return(
      <div>
        <ErrorMessageInput onErrorTextChange={this.updateErrorText} showPopupStatus={showPopup} />
        <button onClick={this.openPopup} disabled={!this.errorTextIsPresent(errorText)}>Show error popuop </button>
        <div>{popup}</div>
      </div>
    );
  }

}

export default Root;