import React, { useState } from 'react';
import styles from './Login.module.css'
import { reduxForm, Field } from 'redux-form';

const LoginPage = (props) => {
    const [isLogin, setLogin] = useState(true)
    return (
        <div className={styles.loginPage}>
            { isLogin ? <Login login={ props.login } /> : <Register register={ props.register } />}
            <p className={ styles.LogOrChange }>or
                { isLogin
                    ? <span onClick={ () => setLogin(false) } > Register</span>
                    : <span onClick={ () => setLogin(true) }> Login</span>
                }
            </p>
        </div>
    )
}
export default LoginPage;


const LoginForms = (props) => {
    const goLogin = (formData) => {
        props.login(formData);
    }
    return (
        <div className={styles.loginBlock}>
            <h2>Login</h2>
            <form onSubmit={ props.handleSubmit(goLogin) } className={ styles.form } >
                <Field className={ styles.input } component='input' name='fullName' type='text' placeholder='Your Full Name' />
                <Field className={ styles.input } component='input' name='password' type='password' placeholder='Your Password' />
                <button>Login</button>
                { props.error && <div className={ styles.wrongData }>{ props.error }</div> }
            </form>
        </div>
    )
}
const Login = reduxForm({ form: 'login' })(LoginForms)


const RegisterForms = (props) => {
    const goRegister = (formData) => {
        props.register(formData);
    }

    return (
        <div className={styles.registerBlock}>
            <h2>Register</h2>
            <form onSubmit={props.handleSubmit(goRegister)} className={ styles.form } >
                <Field className={ styles.input } component='input' name='newName' type='text' placeholder='Full Name' />
                <Field className={ styles.input } component='input' name='newPassword' type='password' placeholder='Password' />
                <button>Register</button>
                { props.error && <div className={ styles.wrongData }>{ props.error }</div> }
            </form>
        </div>
    )
}
const Register = reduxForm({ form: 'register' })(RegisterForms)