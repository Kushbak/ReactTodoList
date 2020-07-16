import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { tasksReducer } from "./tasksReducer";
import { usersReducer } from "./usersReducer";



export default combineReducers({
    form: formReducer,
    tasksData: tasksReducer,
    usersData: usersReducer
})