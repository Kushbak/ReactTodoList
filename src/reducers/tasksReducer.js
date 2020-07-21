import { tasksApi } from "../api/api"

let initialState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TASKS': 
            return {
                ...state,
                tasks: [...action.tasks]
            } 
        case 'ADD_NEW_TASK': {
            let newTask = {
                ...action.task
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]    // либо можно этот кейс удалить и при создании нового таска перевызвать SET_TASKS
            } 
        } 
        default:
            return state;
    }
}


// Actions

export const setTasksSuccess = (tasks) => ({
    type: 'SET_TASKS',
    tasks
})

export const addNewTaskSuccess = (task) => ({
    type: 'ADD_NEW_TASK',
    task
}) 

// Thunks

export const setTasks = (userId) => (dispatch) => {
    tasksApi.getTasks(userId)
        .then(res => {  
            dispatch(setTasksSuccess(res.data));
        })
} 

export const addNewTask = (data) => (dispatch) => {
        tasksApi.addTask(data)
        .then(res => {
            dispatch(addNewTaskSuccess(res.data));
        })
}

export const addToImportant = (userId, taskId, bool) => (dispatch) => { 
    tasksApi.addToImportant(taskId, bool)
        .then(res => {  
            dispatch(setTasks(userId)) ;
        })
}

export const addToArchive = (userId, taskId, bool) => (dispatch) => {
    tasksApi.addToArchive(taskId, bool)
        .then(res => {
            dispatch(setTasks(userId));
        })
}

export const editTask = (userId, taskId, value) => (dispatch) => {
    tasksApi.editTask(taskId, value)
        .then(res => {
            dispatch(setTasks(userId));
        })
}

export const removeTask = (taskId, userId) => (dispatch) => {
    tasksApi.removeTask(taskId)
        .then(res => {
            dispatch(setTasks(userId));
        })
}

export const doneTask = (taskId, userId, bool) => (dispatch) => {
    tasksApi.doneTask(taskId, bool)
        .then(res => {
            dispatch(setTasks(userId));
        })
}
// FIX: убрать это говно и сделать так чтобы тогглилось локально без запросов на сервер и с правильным рендером
export const toggleEditMode = (taskId, userId, bool) => (dispatch) => {
    tasksApi.toggleEditMode(taskId, bool)
        .then(res => {
            dispatch(setTasks(userId));
        })
}