import React, { Component } from 'react';
import Login from '../components/Login'
import MainContainer from './MainContainer';



const UserContainer = ({loggedInUser, onSubmitLogin, users, onUserLogout}) => {

    if (loggedInUser) {
        return <MainContainer/>
    }

    return ( 
        <div>
            <Login onSubmitLogin={onSubmitLogin}/>
        </div>
     );
}
 
export default UserContainer;