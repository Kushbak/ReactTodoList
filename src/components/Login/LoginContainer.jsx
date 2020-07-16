import React from 'react';
import LoginPage from './Login';
import { connect } from 'react-redux';
import { register, login, logout } from '../../reducers/usersReducer';

class LoginContainer extends React.Component{
    render(){
        return <LoginPage { ...this.props } />
    }
} 

const mstp = (state) => ({
    userData: state.usersData.userData
})

export default connect(mstp, { register, login, logout })(LoginContainer);