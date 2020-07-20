import { stopSubmit } from "redux-form";
import { usersApi } from "../api/api";

let initialState = { 
    isAuth: false
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_AUTH_USER_DATA': 
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth
            };  
        default:
            return state;
    }
}



export const setAuthUserData = (userData, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    userData,
    isAuth
}); 

export const login = (formData) => (dispatch) => { 
    usersApi.checkUser(formData.fullName)
        .then(r => {
            if (r.data.length && formData.password === r.data[0].password) {
                usersApi.login(r.data[0].id)
                    .then(res => { 
                        dispatch(setAuthUserData(res.data[0], true)); 
                    })
            } else {
                dispatch(stopSubmit('login', { _error: 'Неправильный логин или пароль' })); 
            };
        })
}

export const logout = () => (dispatch) => {
    dispatch(setAuthUserData(undefined, false)); 
}

export const register = (formData) => (dispatch) => {
    usersApi.checkUser(formData.newName)
        .then(r => {
            if (r.status === 400) {
                dispatch(stopSubmit('register', { _error: 'Такое имя пользователя уже существует' }));
            }
            else {
                usersApi.register(formData)
                    .then(r => {
                        if (r.status === 201) {
                            dispatch(setAuthUserData(r.data, true))  
                        } else {
                            alert('Что-то пошло не так')
                        }
                    })
            }
        })
}

