import React, { Component } from 'react';
import Login from '../components/Login'
import MainContainer from './MainContainer';
import Request from '../helpers/request';



const UserContainer = ({loggedInUser, onSubmitLogin, users, onUserLogout, removeUser}) => {

    const createUser = (user) => {
      const request = new Request()
      request.post('/api/users', user)
      .then(() => {
        window.location = '/movies'
      })
    }
    
    const saveUser = (user) => {
      const request = new Request()
      request.patch('/api/users' + user.id, user)
      .then(() => {
        window.location = '/users/'+user.id
      })
    }

    if (loggedInUser) {
        return <MainContainer users ={users} user={loggedInUser} onUserLogout={onUserLogout} addToWatchList={saveUser}removeUser={removeUser}/>
    }

    return ( 
        <div>
            <Login onSubmitLogin={onSubmitLogin} createUser={createUser}/>
        </div>
     );
}
 
export default UserContainer;