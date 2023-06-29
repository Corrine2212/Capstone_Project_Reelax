import logo from './logo.svg';
import './App.css';
import UserContainer from './containers/UserContainer'
import React, { useState, useEffect } from 'react';


function App() {
  const baseURL = "/api/users"
  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)
  // const [postToEdit, setPostToEdit] = useState(null)
  // const [posts, setPosts] = useState([])
  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = () => {
    return fetch(baseURL)
        .then(res => res.json())
        .then(data => setUsers(data))
      }
  const onSubmitLogin = (searchUser) => { // searchUser is the user that is trying to log in
    console.log('search user', searchUser);
    const workingUser = users.find(
      (user) => // find the user that matches the username or email and password
        (user.username === searchUser.username || user.email === searchUser.username) &&
        user.password === searchUser.password
    );
    if (workingUser) {
      setLoggedInUser(workingUser)
      // localStorage.setItem(‘loggedInUser’, JSON.stringify(workingUser)); // stores the logged in user in local storage
    } else { // if user doesn’t exist
      console.log('Authentication failed');
    }
  };
  const onUserLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser') // removes the logged in user from local storage
  }
  
  // const handleEditClicked = (id, post) => {
  //   putPost(id, post)
  //   let updatedPostIndex = posts.indexOf(post)
  //   let newPosts = [...posts]
  //   newPosts[updatedPostIndex] = post
  //   setPostToEdit(newPosts)
  // }
  // const addPost = (post) => {
  //   setPosts([...posts, post]);
  // }
  // const removeUser = (id) => {
  //   const usersToKeep = users.filter(user => user._id !== id)
  //   setUsers(usersToKeep);
  // }
  // const updatePostForUser = (updatedUser) => {
  //   console.log(updatedUser)
  //   createPostForUser(updatedUser)
  //   const copiedUsers = [...users]
  //   // loop through users and find user where user id matches find
  //   const foundUser = copiedUsers.find((user) => updatedUser._id == user._id)
  //   const userIndex = copiedUsers.indexOf(foundUser)
  //   copiedUsers.splice(userIndex, 1, updatedUser)
  //   // splice ( index, number, what to replace it with)
  //   setUsers(copiedUsers.reverse())
  // }
  // const postForUserUpdated = (updatedUser) => {
  //   editPostForUser(updatedUser)
  //   const copiedUsers = [...users]
  //   // loop through users and find user where user id matches find
  //   const foundUser = copiedUsers.find((user) => updatedUser._id == user._id)
  //   const userIndex = copiedUsers.indexOf(foundUser)
  //   copiedUsers.splice(userIndex, 1, updatedUser)
  //   // splice ( index, number, what to replace it with)
  //   setUsers(copiedUsers.reverse())
  // }
  // const updateCommentForUser = (updatedUser) => {
  //   createCommentForPost(updatedUser)
  //   // make a copy of the current users list
  //   const copiedUsers = [...users]
  //   // loop through users and find user where user id matches find
  //   const foundUser = copiedUsers.find((user) => updatedUser._id == user._id)
  //   const userIndex = copiedUsers.indexOf(foundUser)
  //   copiedUsers.splice(userIndex, 1, updatedUser)
  //   // splice ( index, number, what to replace it with)
  //   setUsers(copiedUsers.reverse())
  // }
  return (
    <div className='App'>
      <UserContainer  users={users} loggedInUser={loggedInUser} onSubmitLogin={onSubmitLogin} onUserLogout={onUserLogout} />
      {/* // addPost={addPost} updatePostForUser={updatePostForUser} updateCommentForUser={updateCommentForUser} postForUserUpdated={postForUserUpdated}/> */}
    </div>
  );
}
export default App;
