import React from 'react'
import './styles/login.css'

export default function Login(props) {

    return (props.trigger) ? (
        <div className="login">
            <div className="login-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
            </div>
        </div>
    ) : "";
}