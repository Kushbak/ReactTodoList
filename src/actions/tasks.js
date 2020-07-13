export const setTasksSuccess = (tasks) => ({
    type: 'SET_TASKS',
    tasks
})

export const addNewTask = (task) => ({
    type: 'ADD_NEW_TASK',
    task
})

export const addToImportant = (importantTask) => ({
    type: 'ADD_TO_IMPORTANT',
    importantTask
})

export const addToArchive = (archivedTask) => ({
    type: 'ADD_TO_ARCHIVE',
    archivedTask
})

