let initialState = {
    allTasks: [
        {id: 1, descr: 'Thats the first task for test1', date: '11.07.20 17:57', isImportant: false},
        {id: 2, descr: 'Thats the first task for test2', date: '17.07.20 17:57', isImportant: false},
        {id: 3, descr: 'Thats the first task for test3', date: '11.02.20 23:52', isImportant: true},
        {id: 4, descr: 'Thats the first task for test4', date: '17.07.20 17:57', isImportant: false},
        {id: 5, descr: 'Thats the first task for test5', date: '17.02.20 23:52', isImportant: true},
        {id: 6, descr: 'Thats the first task for test6', date: '11.02.20 23:52', isImportant: true}
    ],
    importantTasks: [],
    archivedTasks: []
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TASKS': 
            return {
                ...state,
                allTasks: [...action.allTasks]
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

export default tasksReducer;