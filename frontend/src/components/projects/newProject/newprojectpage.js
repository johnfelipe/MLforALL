import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CreateProject from "./createproject";
import BuildProject from "./buildproject";
import CircularProgress from "@material-ui/core/CircularProgress";

class CreateProjectContainer extends Component {
	
	
	goToProjectEdit = () => {
		this.props.history.push("/edit/" +  this.props.projID);
	}

	componentDidUpdate(prevProps) {
		if (this.props.projID !== prevProps.projID) {
		  this.goToProjectEdit();
		}
	  }

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<CreateProject />
		);
 		
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		projID: state.project.curUserProjID,
		curUserProj: state.project.curUserProj
	};
};

export default connect(mapStateToProps)(CreateProjectContainer);
