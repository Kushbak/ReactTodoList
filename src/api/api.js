import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
})


export const tasksApi = {
    getTasks(userId) { 
        return instance.get(`tasks?userId=${userId}`)
    },
    addTask(data) {
        return instance.post(`tasks?userId=${data.userId}`, {
            "description": data.description,
            "isImportant": data.isImportant,
            "isArchived": data.isArchived, 
            "userId": data.userId
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


export const usersApi = {
    checkUser(fullName) {
        return instance.get(`users`, { params: { 'fullName': fullName } })
    }, 
    register(data){
        return instance.post(`users`, {
            "fullName": data.newName,
            "password": data.newPassword 
        })
    },
    login(userId){
        return instance.get(`users?id=${userId}`)
    }
}
