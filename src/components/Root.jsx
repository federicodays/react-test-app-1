// @flow

import * as React from "react";

import ErrorMessageInput from "./ErrorMessageInput";
import ErrorPopup from "./ErrorPopup";

type Props = {};

type State = {
  popupIsDisplayed: boolean,
  errorMessage: string,
};

class Root extends React.Component<Props, State> {

  constructor() {
    super();

    // Workaround for flow error: Cannot assign this.updateErrorMessage.bind(...) to this.updateErrorMessage because property updateErrorMessage is not
    // writable.

    // (this: any).updateErrorMessage = this.updateErrorMessage.bind(this);
    // (this: any).openPopup = this.openPopup.bind(this);
    // (this: any).closePopup = this.closePopup.bind(this);

    this.state = {errorMessage: '', popupIsDisplayed: false};
  }

  updateErrorMessage(message: string) {
    this.setState({errorMessage: message});
  }

  errorMessageIsPresent(message: string){
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
      popup = <ErrorPopup closePopup={() => this.closePopup()} errorMessage={errorMessage} />;
    }

    return(
      <div>
        <ErrorMessageInput updateErrorMessage={(message) => this.updateErrorMessage(message) } showPopup={showPopup} />
        <button onClick={() => this.openPopup()} disabled={!this.errorMessageIsPresent(errorMessage)}>Show error popup</button>
        <div>{popup}</div>
      </div>
    );
  }
}

export default Root;