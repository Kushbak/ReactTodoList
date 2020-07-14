import { tasksApi } from "../api/api"

let initialState = {
    allTasks: [
        // {id: 1, descr: 'Thats the first task for test1', date: '11.07.20 17:57', isImportant: false},
        // {id: 2, descr: 'Thats the first task for test2', date: '17.07.20 17:57', isImportant: false},
        // {id: 3, descr: 'Thats the first task for test3', date: '11.02.20 23:52', isImportant: true},
        // {id: 4, descr: 'Thats the first task for test4', date: '17.07.20 17:57', isImportant: false},
        // {id: 5, descr: 'Thats the first task for test5', date: '17.02.20 23:52', isImportant: true},
        // {id: 6, descr: 'Thats the first task for test6', date: '11.02.20 23:52', isImportant: true}
    ],
    importantTasks: [],
    archivedTasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TASKS': 
            return {
                ...state,
                allTasks: [...action.tasks]
            } 
        case 'ADD_NEW_TASK': {
            let newTask = {
                ...action.task
            }
            return {
                ...state,
                allTasks: [...state.allTasks, newTask]    // либо можно этот кейс удалить и при создании нового таска перевызвать SET_TASKS
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

export const addNewTask = (userId) => (dispatch) => {
    tasksApi.addTask(userId)
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