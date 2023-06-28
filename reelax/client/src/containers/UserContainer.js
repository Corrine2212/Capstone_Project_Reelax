import React, { Component } from 'react';
import Login from '../components/Login'
import MainContainer from './MainContainer';


const UserContainer = () => {

    if (loggedInUser) {
        return <MainContainer/>
    }

    return ( 
        <div>
            <Login/>
        </div>
     );
}
 
export default UserContainer;