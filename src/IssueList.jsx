import React from "react";
//import "whatwg-fetch";
import "isomorphic-fetch";
import { Link } from "react-router";
//import { Link } from 'react-router-dom'
import { Button, Glyphicon, Table, Panel, Pagination } from "react-bootstrap";

//import ReactDOM from 'react-dom';
//import { Route, Redirect, HashRouter, Switch, withRouter, BrowserRouter } from 'react-router-dom';

//import IssueAdd from "./IssueAdd.jsx";
import IssueFilter from "./IssueFilter.jsx";
//import Toast from "./Toast.jsx";
import withToast from "./withToast.jsx";

import PropTypes from "prop-types";
/*
const IssueRow = (props) => (
  <tr>
    <td><Link to={`/issues/${props.issue._id}`}>{props.issue._id.substr(-4)}</Link></td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created.toDateString()}</td>
    <td>{props.issue.effort}</td>
    <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
    <td>{props.issue.title}</td>
  </tr>
);
*/

const IssueRow = props => {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }

  return (
    <tr>
      <td>
        <Link to={`/issues/${props.issue._id}`}>
          {props.issue._id.substr(-4)}
        </Link>
      </td>
      <td>{props.issue.status}</td>
      <td>{props.issue.owner}</td>
      <td>{props.issue.created.toDateString()}</td>
      <td>{props.issue.effort}</td>
      <td>
        {props.issue.completionDate
          ? props.issue.completionDate.toDateString()
          : ""}
      </td>
      <td>{props.issue.title}</td>
      {/* 
      <td>
        <button onClick={onDeleteClick}>Delete</button>
      </td>
      
      <td>
        <Button bsSize="xsmall" onClick={onDeleteClick}>
          <Glyphicon glyph="trash" />
        </Button>
      </td>
      */}
      {props.deleteIssue ? (
        <td>
          <Button bsSize="xsmall" onClick={onDeleteClick}><Glyphicon glyph="trash" /></Button>
        </td>
      ) : null}
    </tr>
  );
};

IssueRow.propTypes = {
  //issue: React.PropTypes.object.isRequired,
  issue: PropTypes.object.isRequired,
  deleteIssue: PropTypes.func,
};

function IssueTable(props) {
  //const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue._id} issue={issue} deleteIssue={props.deleteIssue} />
  ));
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion Date</th>
          <th>Title</th>
          {props.deleteIssue ? <th></th> : null}
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </Table>
  );
}

IssueTable.propTypes = {
  //issues: React.PropTypes.array.isRequired,
  issues: PropTypes.array.isRequired,
  deleteIssue: PropTypes.func,
};

const PAGE_SIZE = 10;

//export default class IssueList extends React.Component {
class IssueList extends React.Component {
  static dataFetcher({ urlBase, location }) {
    /*
    return fetch(`${urlBase || ""}/api/issues${location.search}`).then(
      response => {
        if (!response.ok)
          return response.json().then(error => Promise.reject(error));
        return response.json().then(data => ({ IssueList: data }));
      }
    );
    */
    const query = Object.assign({}, location.query);
    const pageStr = query._page;
    if (pageStr) {
      delete query._page;
      query._offset = (parseInt(pageStr, 10) - 1) * PAGE_SIZE;
    }
    query._limit = PAGE_SIZE;
    const search = Object.keys(query)
      .map(k => `${k}=${query[k]}`)
      .join("&");
    return fetch(`${urlBase || ""}/api/issues?${search}`).then(response => {
      if (!response.ok)
        return response.json().then(error => Promise.reject(error));
      return response.json().then(data => ({ IssueList: data }));
    });
  }

  constructor(props, context) {
    super(props, context);
    //const issues = context.initialState.data.records;
    /*
    const issues = context.initialState.IssueList
      ? context.initialState.IssueList.records
      : [];
    */
    const data = context.initialState.IssueList
      ? context.initialState.IssueList
      : { metadata: { totalCount: 0 }, records: [] };
    const issues = data.records;
    issues.forEach(issue => {
      issue.created = new Date(issue.created);
      if (issue.completionDate) {
        issue.completionDate = new Date(issue.completionDate);
      }
    });
    //this.state = { issues: [] };
    this.state = {
      //issues: [],
      issues,
      //toastVisible: false,
      //toastMessage: "",
      //toastType: "success",
      totalCount: data.metadata.totalCount
    };

    //this.createIssue = this.createIssue.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    //this.showError = this.showError.bind(this);
    //this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  /*
  Writing in es6 and using react 0.14.6 / react-router 2.0.0-rc5. 
  I use this command to lookup the query params in my components:

  this.props.location.query
  It creates a hash of all available query params in the url.

  Update:
  For React-Router v4, see this answer. 
  Basically, use this.props.location.search to get the query string, and parse with the query-string package or URLSearchParams -

  const params = new URLSearchParams(paramsString); 
  const tags = params.get('tags');`
  */

  componentDidUpdate(prevProps) {
    //console.log(prevProps);

    const oldQuery = prevProps.location.query;
    const newQuery = this.props.location.query;

    /*
    const oldQuery = prevProps.location.search;
    const newQuery = this.props.location.search;
    const params1 = new URLSearchParams(oldQuery); 
    const tags1 = params1.get('tags');
    const params2 = new URLSearchParams(newQuery); 
    const tags2 = params2.get('tags');
    */

    //console.log(tags1);
    //console.log(tags2);

    /*
    if (oldQuery.status === newQuery.status) {
      return;
    }
    */

    if (
      oldQuery.status === newQuery.status &&
      oldQuery.effort_gte === newQuery.effort_gte &&
      oldQuery.effort_lte === newQuery.effort_lte &&
      oldQuery._page === newQuery._page
    ) {
      return;
    }

    //if (params1 === params2) return;

    this.loadData();
  }

  setFilter(query) {
    this.props.router.push({ pathname: this.props.location.pathname, query });
  }

  selectPage(eventKey) {
    const query = Object.assign(this.props.location.query, { _page: eventKey });
    this.props.router.push({ pathname: this.props.location.pathname, query });
  }

  /*
  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger"
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }
  */

  loadData() {
    IssueList.dataFetcher({ location: this.props.location })
      .then(data => {
        const issues = data.IssueList.records;
        issues.forEach(issue => {
          issue.created = new Date(issue.created);
          if (issue.completionDate) {
            issue.completionDate = new Date(issue.completionDate);
          }
        });
        //this.setState({ issues });
        this.setState({
          issues,
          totalCount: data.IssueList.metadata.totalCount
        });
      })
      .catch(err => {
        this.props.showError(`Error in fetching data from server: ${err}`);
      });
  }

  deleteIssue(id) {
    fetch(`/api/issues/${id}`, { method: "DELETE" }).then(response => {
      //if (!response.ok) alert("Failed to delete issue");
      if (!response.ok) this.props.showError("Failed to delete issue");
      else this.loadData();
    });
  }

  render() {
    return (
      <div>
        <Panel collapsible header="Filter">
          <IssueFilter
            setFilter={this.setFilter}
            initFilter={this.props.location.query}
          />
        </Panel>
        <Pagination
          items={Math.ceil(this.state.totalCount / PAGE_SIZE)}
          activePage={parseInt(this.props.location.query._page || "1", 10)}
          onSelect={this.selectPage}
          maxButtons={7}
          next
          prev
          boundaryLinks
        />
        <IssueTable
          issues={this.state.issues}
          deleteIssue={this.props.user.signedIn ? this.deleteIssue : null}
        />
      </div>
    );
  }
}

IssueList.propTypes = {
  location: PropTypes.object.isRequired,
  router: PropTypes.object,
  showError: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

IssueList.contextTypes = {
  initialState: PropTypes.object
};

const IssueListWithToast = withToast(IssueList);
IssueListWithToast.dataFetcher = IssueList.dataFetcher;

export default IssueListWithToast;
