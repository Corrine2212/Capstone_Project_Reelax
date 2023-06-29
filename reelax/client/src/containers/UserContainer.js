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
    const saveUser = async (user) => {
      const request = await new Request()
      request.patch('/api/users' + user.id, user)
      .then(() => {
        window.location = '/users/' + user
      })
    }



    if (loggedInUser) {
        return <MainContainer users ={users} user={loggedInUser} addToWatchList={saveUser}/>
    }

    return ( 
        <div>
            <Login onSubmitLogin={onSubmitLogin} createUser={createUser}/>
        </div>
     );
}
 
export default UserContainer;