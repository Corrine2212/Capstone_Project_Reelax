import logo from './logo.svg';
import './App.css';
import UserContainer from './containers/UserContainer'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../src/components/About';



function App() {

  const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;

const MainContent = styled.div`
flex: 1;
`;

  const Footer = styled.footer`
    /* position: absolute; */
    left: 0;
    bottom: 0px;
    height: 0.5rem;
    width: 100%;
    /* text-align: center; */
    margin-top: 60px;
    /* position: fixed; */
    /* margin-top: auto; */
    margin-bottom: 10px;
    z-index: 1;
    color: white;
    font-size: 2vh;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 15px 25px, rgba(0, 0, 0, 0.35) 0px 5px 10px;
    font-family: reem kufi, sans-serif;
    
  `
  const baseURL = "/api/users"
  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)
  // const [postToEdit, setPostToEdit] = useState(null)
  // const [posts, setPosts] = useState([])
  const getUsers = () => {
    return fetch(baseURL)
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  const setUser = (newUser) => {
    setLoggedInUser(newUser)
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
    localStorage.removeItem('user') // removes the logged in user from local storage
  }


  useEffect(() => {
    getUsers()
    const loggedUser = localStorage.getItem("user")
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser)
      setUser(foundUser)
    }
  }, [])

  const removeUser = (id) => {
    const usersToKeep = users.filter(user => user._id !== id)
    setUsers(usersToKeep);
  }

  // const imgDiv = document.querySelector('profile-info')
  // const img = document.querySelector('profilePic')
  // const file = document.querySelector('file')
  // const uploadBtn = document.querySelector('upload-btn')

  // imgDiv.addEventListener('mouseenter', function(){
  //   uploadBtn.style.display = "block" 
  // })
  // imgDiv.addEventListener('mouseleave', function(){
  //   uploadBtn.style.display = "none" 
  // })

  // file.addEventListener('change', function(){
  //   const chooseFile = this.files[0]
  //   if (chooseFile){
  //     const reader = new FileReader()
  //     reader.addEventListener("load", function() {
  //       img.setAttribute('src', reader.result)
  //     })
  //     reader.readAsDataURL(chooseFile)
  //   }
  // })
  // JavaScript





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
  console.log("dippity doo");
  return (
    <Router>
      <AppWrapper>
        <div className="App">
          <UserContainer
            users={users}
            loggedInUser={loggedInUser}
            onSubmitLogin={onSubmitLogin}
            onUserLogout={onUserLogout}
            removeUser={removeUser}
          />
          <MainContent>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
          </MainContent>
          <div className='footer'>
            <bk></bk>
            <bk></bk>
            <bk></bk>
            <bk></bk>
            <bk></bk>
            <Link to="/about">
              A.H.E.C. ltd
            </Link>
          </div>
          <div>
          </div>
        </div>
      </AppWrapper>
    </Router>

  );

}
export default App;
