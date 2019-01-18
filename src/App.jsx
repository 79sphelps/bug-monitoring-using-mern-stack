//import 'babel-polyfill';
import "@babel/polyfill";
import React from "react";
/*
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  Redirect,
  browserHistory,
  withRouter
} from "react-router";
*/
//import { Route, Redirect, HashRouter, Switch, withRouter, BrowserRouter } from 'react-router-dom';
/*
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
*/

import PropTypes from "prop-types";

//import IssueList from "./IssueList.jsx";
//import IssueEdit from "./IssueEdit.jsx";
//import IssueAddNavItem from './IssueAddNavItem.jsx';

//import withToast from './withToast.jsx';

//const contentNode = document.getElementById("contents");

//const continents = ['Africa','America','Asia','Australia','Europe', 'Oregon'];
//const message = continents.map(c => `Hello ${c}!`).join(' ');

//const component = <p>{message}</p>;           // A simple component, written in JSX

//ReactDOM.render(component, contentNode);      // Render the component inside the content Node
//ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node

//const NoMatch = () => <p>Page Not Found</p>;

/*
const Header = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/issues">
        <NavItem>Issues</NavItem>
      </LinkContainer>
      <LinkContainer to="/reports">
        <NavItem>Reports</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <IssueAddNavItem showError={props.showError} />
      <NavDropdown
        id="user-dropdown"
        title={<Glyphicon glyph="option-horizontal" />}
        noCaret
      >
        <MenuItem>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

Header.propTypes = {
  showError: PropTypes.func.isRequired,
};

const HeaderWithToast = withToast(Header);
*/
import Header from './Header.jsx';

/*
const App = props => (
  <div>
    <div className="header">
      <h1>Issue Tracker</h1>
    </div>
    <Header />
    <div className="container-fluid">
      {props.children}
      <hr />
      <h5>
        <small>
          Full source code available at this{" "}
          <a href="https://github.com/vasansr/pro-mern-stack">
            GitHub repository
          </a>
          .
        </small>
      </h5>
    </div>
  </div>
);
*/
export default class App extends React.Component {
  static dataFetcher({ urlBase, cookie }) {
    const headers = cookie ? { headers: { Cookie: cookie } } : null;
    return fetch(`${urlBase || ''}/api/users/me`, headers).then(response => {
      if (!response.ok) return response.json().then(error => Promise.reject(error));
      return response.json().then(data => ({ App: data }));
    });
  }

  constructor(props, context) {
    super(props, context);
    const user = context.initialState.App ? context.initialState.App : {};
    this.state = {
      //user: { signedIn: false, name: '' },
      user,
    };
    this.onSignin = this.onSignin.bind(this);
    this.onSignout = this.onSignout.bind(this);
  }

  componentDidMount() {
    App.dataFetcher({ })
    .then(data => {
      const user = data.App;
      this.setState({ user });
    });
  }

  onSignin(name) {
    this.setState({ user: { signedIn: true, name } });
  }

  onSignout() {
    this.setState({ user: { signedIn: false, name: '' } });
  }

  render() {
    const childrenWithUser = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { user: this.state.user })
    );

    return (
      <div>
        <Header user={this.state.user} onSignin={this.onSignin} onSignout={this.onSignout} />
        <div className="container-fluid">
          {/* {this.props.children} */}
          {childrenWithUser}
          <hr />
          <h5><small>
            Full source code available at this <a href="https://github.com/vasansr/pro-mern-stack">
            GitHub repository</a>.
          </small></h5>
        </div>
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired
  //children: React.PropTypes.object.isRequired,
};

App.contextTypes = {
  initialState: PropTypes.object,
};