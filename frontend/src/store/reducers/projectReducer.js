const initState = {
	curUserProjID: "init",
	csvLoaded: false,
	currentWorkingProject: "initialized"
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "CREATE_PROJECT":
			return {
				...state,
				curUserProjID: action.snapshot["id"]
			};
		case "CREATE_PROJECT_ERROR":
			return state;
		case "DELETE_PROJECT_DOC":
			return state;
		case "DELETE_PROJECT_DOC_ERROR":
			return state;
		case "DELETE_PROJECT_STORE":
			return state;
		case "DELETE_PROJECT_STORE_ERROR":
			return state;
		case "UPLOAD_CSV":
			return { ...state, csvLoaded: true };
		case "UPLOAD_CSV_ERROR":
			return state;
		case "UPLOAD_CSV_METADATA":
			return state;
		case "UPLOAD_CSV_METADATA_ERROR":
			return state;
		case "UPDATE_CSV_NAME":
			return state;
		case "UPDATE_CSV_NAME_ERROR":
			return state;
		case "UPDATE_CONTENT":
			return state;
		case "UPDATE_CONTENT_ERROR":
			return state;
		case "UPDATE_CURRENT_WORKING_PROJECT":
			console.log("IN REDUCER");
			console.log(action.pid);
			console.log(action.project);
			console.log(action.uid);
			return {
				...state,
				currentWorkingProject : {
					uid : action.uid,
					projId : action.pid,
					title : action.project.title,
					csvName : action.project.csvName,
					nanMethod : "initialized",
					dfVariables : "initialized",
					targetParameter : "initialized",
					modelList : "initialized",
				}
			}
		default:
			return state;
	}
};

export default projectReducer;
