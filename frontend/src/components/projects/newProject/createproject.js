import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Guide from "./guidingInfo";
import { createProject } from "../../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
  };
  handleChange = (e) => {
    console.log("event", e);
    console.log("name of the project", e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    if (!auth.emailVerified) return <Redirect to={`/verify`} />;
    return (
      <div className="create-project">
        <div className="row container">
          {/* <h1 className="purple-text">Create Project</h1> */}
        </div>
        <div className="row slider-row">
          <div
            className="container"
            style={{
              backgroundColor: "#F5F5F5",
              width: "100%",
							border: "2px dashed #283593",
							borderRadius: "15px"
            }}
          >
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="title">Insert a title here!</label>
                <input
                  autoComplete="off"
                  type="text"
                  id="title"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <button className="btn btn-sec waves-effect waves-light z-depth-0">
                  Begin
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Do something with handling the click */}
        {/* <Guide /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
