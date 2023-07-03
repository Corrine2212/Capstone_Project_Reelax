import React from 'react';
const ForgotPassword = (props) => {
    if (!props.show){
        return null
    }
    return (
        <div>
            <img className='silly-goose' src="https://media.tenor.com/Ym4iH4Mr7McAAAAM/silly-goose-silly-goose-moment.gif"
            alt="sillygoose"/>
            <h2 className='silly-goose-txt'>you are a silly goose!</h2>
            <button className='silly-goose-btn' onClick={props.onClose}>oh wait! I member!</button>
        </div>
     );
}
export default ForgotPassword;