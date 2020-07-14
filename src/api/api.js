import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
})


export const tasksApi = {
    getTasks(userId) {
        return instance.get(`tasks?userId=${userId}`)
    },
    addTask(userId, data) {
        return instance.post(`tasks?userId=${userId}`, {
            "description": data.description,
            "isImportant": data.important,
            "isArchived": data.archived,
            "date": data.date,
            "userId": userId
        })
    },
    addToImportant(userId, taskId, bool){
        return instance.put(`tasks?userId=${userId}&id=${taskId}`, {
            "isImportant": bool
        })
    },
    addToArchive(userId, taskId, bool){
        return instance.put(`tasks?userId=${userId}&id=${taskId}`, {
            "isArchived": bool
        })
    }
}
