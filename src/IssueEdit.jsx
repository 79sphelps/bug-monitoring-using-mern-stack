import React from "react";
//import { Link } from "react-router";
//import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
//import Toast from "./Toast.jsx";
import withToast from './withToast.jsx';

import {
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
  Panel,
  Form,
  Col,
  Alert
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NumInput from "./NumInput.jsx";
import DateInput from "./DateInput.jsx";

//export default class IssueEdit extends React.Component {
class IssueEdit extends React.Component {
  static dataFetcher({ params, urlBase }) {
    return fetch(`${urlBase || ""}/api/issues/${params.id}`).then(response => {
      if (!response.ok)
        return response.json().then(error => Promise.reject(error));
      return response.json().then(data => ({ IssueEdit: data }));
    });
  }

  constructor(props, context) {
    super(props, context);
    /*
    const issue = context.initialState.data;
    issue.created = new Date(issue.created);
    issue.completionDate = issue.completionDate != null ?
      new Date(issue.completionDate) : null;
    */
    let issue;
    if (context.initialState.IssueEdit) {
      issue = context.initialState.IssueEdit;
      issue.created = new Date(issue.created);
      issue.completionDate =
        issue.completionDate != null ? new Date(issue.completionDate) : null;
    } else {
      issue = {
        _id: "",
        title: "",
        status: "",
        owner: "",
        effort: null,
        completionDate: null,
        created: null
      };
    }
    this.state = {
      /*
      issue: {
        _id: "",
        title: "",
        status: "",
        owner: "",
        effort: null,
        completionDate: null,
        created: null
      },
      */
      issue,
      invalidFields: {},
      //toastVisible: false,
      //toastMessage: "",
      //toastType: "success",
      showingValidation: false
    };
    this.dismissValidation = this.dismissValidation.bind(this);
    this.showValidation = this.showValidation.bind(this);
    //this.showSuccess = this.showSuccess.bind(this);
    //this.showError = this.showError.bind(this);
    //this.dismissToast = this.dismissToast.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onValidityChange = this.onValidityChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.loadData();
    }
  }

  /*
  onChange(event) {
    const issue = Object.assign({}, this.state.issue);
    issue[event.target.name] = event.target.value;
    this.setState({ issue });
  }
  */

  onChange(event, convertedValue) {
    const issue = Object.assign({}, this.state.issue);
    //issue[event.target.name] = event.target.value;
    const value =
      convertedValue !== undefined ? convertedValue : event.target.value;
    issue[event.target.name] = value;
    this.setState({ issue });
  }

  onValidityChange(event, valid) {
    const invalidFields = Object.assign({}, this.state.invalidFields);
    if (!valid) {
      invalidFields[event.target.name] = true;
    } else {
      delete invalidFields[event.target.name];
    }
    this.setState({ invalidFields });
  }

  onSubmit(event) {
    event.preventDefault();
    this.showValidation();

    if (Object.keys(this.state.invalidFields).length !== 0) {
      return;
    }

    fetch(`/api/issues/${this.props.params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.issue)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(updatedIssue => {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) {
              updatedIssue.completionDate = new Date(
                updatedIssue.completionDate
              );
            }
            this.setState({ issue: updatedIssue });
            //alert("Updated issue successfully.");
            this.props.showSuccess("Updated issue successfully.");
          });
        } else {
          response.json().then(error => {
            //alert(`Failed to update issue: ${error.message}`);
            this.props.showError(`Failed to update issue: ${error.message}`);
          });
        }
      })
      .catch(err => {
        //alert(`Error in sending data to server: ${err.message}`);
        this.props.showError(`Error in sending data to server: ${err.message}`);
      });
  }

  loadData() {
    /*
    fetch(`/api/issues/${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          response.json().then(issue => {
            issue.created = new Date(issue.created);
            issue.completionDate =
              issue.completionDate != null
                ? new Date(issue.completionDate)
                : null;
            //issue.effort = issue.effort != null ? issue.effort.toString() : '';
            this.setState({ issue });
          });
        } else {
          response.json().then(error => {
            //alert(`Failed to fetch issue: ${error.message}`);
            this.showError(`Failed to fetch issue: ${error.message}`);
          });
        }
      })
      .catch(err => {
        //alert(`Error in fetching data from server: ${err.message}`);
        this.showError(`Error in fetching data from server: ${err.message}`);
      });
    */
    IssueEdit.dataFetcher({ params: this.props.params })
      .then(data => {
        const issue = data.IssueEdit;
        issue.created = new Date(issue.created);
        issue.completionDate =
          issue.completionDate != null ? new Date(issue.completionDate) : null;
        this.setState({ issue });
      })
      .catch(err => {
        this.props.showError(`Error in fetching data from server: ${err.message}`);
      });
  }

  showValidation() {
    this.setState({ showingValidation: true });
  }

  dismissValidation() {
    this.setState({ showingValidation: false });
  }

  /*
  showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "success"
    });
  }

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

  render() {
    const issue = this.state.issue;
    /*
    const validationMessage =
      Object.keys(this.state.invalidFields).length === 0 ? null : (
        <div className="error">
          Please correct invalid fields before submitting.
        </div>
      );
    */
    let validationMessage = null;
    if (
      Object.keys(this.state.invalidFields).length !== 0 &&
      this.state.showingValidation
    ) {
      validationMessage = (
        <Alert bsStyle="danger" onDismiss={this.dismissValidation}>
          Please correct invalid fields before submitting.
        </Alert>
      );
    }
    return (
      <Panel header="Edit Issue">
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              ID
            </Col>
            <Col sm={9}>
              <FormControl.Static>{issue._id}</FormControl.Static>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              Created
            </Col>
            <Col sm={9}>
              <FormControl.Static>
                {issue.created ? issue.created.toDateString() : ""}
              </FormControl.Static>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              Status
            </Col>
            <Col sm={9}>
              <FormControl
                componentClass="select"
                name="status"
                value={issue.status}
                onChange={this.onChange}
              >
                <option value="New">New</option>
                <option value="Open">Open</option>
                <option value="Assigned">Assigned</option>
                <option value="Fixed">Fixed</option>
                <option value="Verified">Verified</option>
                <option value="Closed">Closed</option>
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              Owner
            </Col>
            <Col sm={9}>
              <FormControl
                name="owner"
                value={issue.owner}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              Effort
            </Col>
            <Col sm={9}>
              <FormControl
                componentClass={NumInput}
                name="effort"
                value={issue.effort}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup
            validationState={
              this.state.invalidFields.completionDate ? "error" : null
            }
          >
            <Col componentClass={ControlLabel} sm={3}>
              Completion Date
            </Col>
            <Col sm={9}>
              <FormControl
                componentClass={DateInput}
                name="completionDate"
                value={issue.completionDate}
                onChange={this.onChange}
                onValidityChange={this.onValidityChange}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={3}>
              Title
            </Col>
            <Col sm={9}>
              <FormControl
                name="title"
                value={issue.title}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={3} sm={6}>
              <ButtonToolbar>
                <Button bsStyle="primary" type="submit" disabled={!this.props.user.signedIn}>
                  Submit
                </Button>
                <LinkContainer to="/issues">
                  <Button bsStyle="link">Back</Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={3} sm={9}>
              {validationMessage}
            </Col>
          </FormGroup>
        </Form>
        {/* 
        <Toast
          showing={this.state.toastVisible}
          message={this.state.toastMessage}
          onDismiss={this.dismissToast}
          bsStyle={this.state.toastType}
        />
        */}
      </Panel>
    );
  }
}

IssueEdit.propTypes = {
  params: PropTypes.object.isRequired,
  showSuccess: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

IssueEdit.contextTypes = {
  initialState: PropTypes.object
};

const IssueEditWithToast = withToast(IssueEdit);
IssueEditWithToast.dataFetcher = IssueEdit.dataFetcher;

export default IssueEditWithToast;