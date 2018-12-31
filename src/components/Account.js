import React from "react";
import LoginSignUpModal from "./LoginSignUpModal";

class AccountIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  showLoginSignUpModal = () => this.setState({ modalVisible: true });
  hideLoginSignUpModal = () => this.setState({ modalVisible: false });

  render() {
    return (
      <div
        onMouseEnter={this.showLoginSignUpModal}
        onMouseLeave={this.hideLoginSignUpModal}
      >
        <img src={require("../images/user.svg")} alt="account icon" />
        {this.state.modalVisible ? <LoginSignUpModal /> : null}
      </div>
    );
  }
}

export default AccountIcon;
