import React from "react"
import "./style.css"
import Button from "./Button"
import logo from "./logo.png"
const Apple = () => {
    return (
        <div>
            <h1>React</h1>
            <p>A JavaScript library for building user interfaces</p>
            <img src={logo} alt="ReactLogo" className="logo" />
            <h2>Hello world!</h2>
            <Button buttonText="Start Learning" />
            <Button buttonText="Installation" />
            <Button buttonText="Documentation" />

        </div>
    )
}

export default Apple