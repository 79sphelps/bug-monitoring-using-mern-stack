import React from "react";
import { NavItem, Modal, Button, NavDropdown, MenuItem } from "react-bootstrap";
import PropTypes from "prop-types";

export default class SigninNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      disabled: true
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signout = this.signout.bind(this);
    this.signin = this.signin.bind(this);
  }

  componentDidMount() {
    window.gapi.load("auth2", () => {
      if (!window.gapi.auth2.getAuthInstance()) {
        if (!window.config || !window.config.googleClientId) {
          this.props.showError(
            "Missing Google Client ID or config file /static.config.js"
          );
        } else {
          window.gapi.auth2
            .init({ client_id: window.config.googleClientId })
            .then(() => {
              this.setState({ disabled: false });
            });
        }
      }
    });
  }

  signin() {
    this.hideModal();
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(
      googleUser => {
        //this.props.onSignin(googleUser.getBasicProfile().getGivenName());

        fetch("/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id_token: googleUser.getAuthResponse().id_token
          })
        })
          .then(response => {
            if (response.ok) {
              response.json().then(user => {
                this.props.onSignin(user.name);
              });
            } else {
              response.json().then(error => {
                this.props.showError(`App login failed: ${error}`);
              });
            }
          })
          .catch(err => {
            this.props.showError(`Error posting login to app: ${err}`);
          });
      },
      error => {
        this.props.showError(`Error authenticating with Google: ${error}`);
      }
    );
  }

  signout() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    /*
    auth2.signOut().then(() => {
      this.props.showSuccess('Successfully signed out.');
      this.props.onSignout();
    });
    */

    fetch("/signout", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      if (response.ok) {
        auth2.signOut().then(() => {
          this.props.showSuccess("Successfully signed out.");
          this.props.onSignout();
        });
      }
    });
  }

  showModal() {
    if (this.state.disabled) {
      this.props.showError(
        "Missing Google Client ID or config file /static.config.js"
      );
    } else {
      this.setState({ showing: true });
    }
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    if (this.props.user.signedIn) {
      return (
        <NavDropdown title={this.props.user.name} id="user-dropdown">
          <MenuItem onClick={this.signout}>Sign out</MenuItem>
        </NavDropdown>
      );
    }
    return (
      <NavItem onClick={this.showModal}>
        Sign in
        <Modal
          keyboard
          show={this.state.showing}
          onHide={this.hideModal}
          bsSize="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button block disabled={this.state.disabled} onClick={this.signin}>
              <img src="/btn_google_signin_dark_normal_web.png" alt="Sign in" />
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="link" onClick={this.hideModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </NavItem>
    );
  }
}

SigninNavItem.propTypes = {
  user: PropTypes.object,
  onSignin: PropTypes.func.isRequired,
  onSignout: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
  showSuccess: PropTypes.func.isRequired
};
