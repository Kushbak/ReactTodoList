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
        case 'ADD_TO_IMPORTANT': 
            return{
                ...state,
                importantTasks: [...state.importantTasks, action.importantTask]
            }
        case 'ADD_TO_ARCHIVE': 
            return{
                ...state,
                archivedTasks: [...state.archivedTasks, action.archivedTask]
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

export const addToImportantSuccess = (importantTask) => ({
    type: 'ADD_TO_IMPORTANT',
    importantTask
})

export const addToArchiveSuccess = (archivedTask) => ({
    type: 'ADD_TO_ARCHIVE',
    archivedTask
})


// Thunks

export const setTasks = (userId) => (dispatch) => { 
    tasksApi.getTasks(userId)
        .then(res => { 
            dispatch(setTasksSuccess(res.data))
        })
} 

export const addNewTask = (data) => (dispatch) => {
        tasksApi.addTask(data)
        .then(res => {
            dispatch(addNewTaskSuccess(res.data))
        })
}

export const addToImportant = (userId, taskId, bool) => (dispatch) => {
    tasksApi.addToImportant(userId, taskId, bool)
        .then(res => {
            dispatch(addToImportantSuccess(res.data))
        })
}

export const addToArchive = (userId, taskId, bool) => (dispatch) => {
    tasksApi.addToArchive(userId, taskId, bool)
        .then(res => {
            dispatch(addToArchiveSuccess(res.data))
        })
}