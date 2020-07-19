import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
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
    addToImportant(taskId, bool){ 
        return instance.patch(`tasks/${taskId}`, {
            "isImportant": bool
        })
    },
    addToArchive(taskId, bool){
        return instance.patch(`tasks/${taskId}`, {
            "isArchived": bool
        })
    },
    editTask(taskId, value){
        return instance.patch(`tasks/${taskId}`, {
            "description": value
        })
    },
    removeTask(taskId){
        return instance.delete(`tasks/${taskId}`)
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
