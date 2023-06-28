import React, { Component } from 'react';
import Login from '../components/Login'
import MainContainer from './MainContainer';
import Request from '../helpers/request';



const UserContainer = ({loggedInUser, onSubmitLogin, users, onUserLogout}) => {

    const createUser = (user) => {
      const request = new Request()
      request.post('/api/users', user)
      .then(() => {
        window.location = '/movies'
      })
    }


    if (loggedInUser) {
        return <MainContainer/>
    }

    return ( 
        <div>
            <Login onSubmitLogin={onSubmitLogin} createUser={createUser}/>
        </div>
     );
}
 
export default UserContainer;