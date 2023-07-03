
import ForgotPassword from './ForgotPassword';
import React, { useState } from 'react';
import "./style.css"


const Login = ({ onSubmitLogin, addUser, createUser }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        movies: [],
        reviews: []
    })

    const handleCreate = () => {
        setButtonClicked(!buttonClicked)
    }

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        createUser(formData)

        setFormData({
            username: "",
            email: "",
            password: ""
        })
    }

    const handleUsernameOrEmailChange = (event) => {
        setUsernameOrEmail(event.target.value)
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            email: email,
            password: password
        };
        // loginUser(user) // loginUser is a function that takes in a user object and returns a promise
        //   .then((data) => { // data is the user that is logged in
        //     console.log(“db response”, data);
        if (
            user && // if data exists
            user.email === email && // if the email matches
            user.password === password // if the password matches
        ) {
            console.log('User Logged In', user);
            onSubmitLogin(user);
        } else {
            console.log('Authentication failed');
        }
    }
    // .catch((error) => {
    //   console.error(‘Error occurred:‘, error);
    // });
    // setUsername(‘');
    // setPassword(‘');
    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <img className='login-logo' src='../../1.png'></img>
                <h1 className='sign-in-title'>Sign in </h1>
                <div class="container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>Username/Email</label>
                    <div className="input-field">
                        <input type="text" id="user" placeholder="Username/Email" value={username} onChange={handleUsernameChange} required />
                    </div>

                    <label>Password</label>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <div>
                        <p onClick={() => setShow(true)} className="forgot-pw">Forget Password?</p>
                        {show && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <ForgotPassword onClose={() => setShow(false)} show={show} />
                                </div>
                            </div>
                        )}
                    </div>
                    <input className="login-submit-btn" type="submit" value="Sign In" />
                </form> 
                <div>
                    <p onClick={handleCreate} className="create-acc-btn">Create an account</p>
                    {buttonClicked && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h1>Create Form</h1>
                                <form onSubmit={onSubmit}>
                                    <div className="input-field">
                                        <input type="text" id="user" name='username' placeholder="  USERNAME  " value={formData.username} onChange={onChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="email" name='email' placeholder="  EMAIL  " value={formData.email} onChange={onChange} required />
                                    </div>
                                    <input type="password" id="password" name='password' placeholder="  PASSWORD  " value={formData.password} onChange={onChange} required />
                                    <input className="acc-submit-btn" type="submit" value="Create Account" />
                                </form>
                                <button className="acc-cancel-btn" onClick={handleCreate}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}
export default Login;