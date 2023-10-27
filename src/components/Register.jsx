/** @format */

import React, { useState } from "react"
import Login from "./Login"

const Register = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [add, setAdd] = useState("")

  const [login, setLogin] = useState(false)

  const onClicks = (e) => {
    if (!name || !phone || !password | !email) {
      alert("fill all details")
    } else {
      localStorage.setItem("Email", email)
      localStorage.setItem("Password", password)
      localStorage.setItem("Name", name)
      localStorage.setItem("Address", add)
      localStorage.setItem("Phone", phone)

      alert(`Registered Successfully `)
      setLogin(!login)
    }
  }

  const signIn = () => {
    setLogin(!login)
  }

  return (
    <>
      {login ? (
        <div>
          <Login />
        </div>
      ) : (
        <div className="containersdr">
          <div className="center">
            <h1 className="h1ab">Sign up</h1>
            <br />
            <br />
            <div className="inputdiv">
              <input
                type="text"
                className="inputdiva"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Full Name"
                autoComplete="off"
              ></input>
              <input
                type="text"
                className="inputdiva"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                autoComplete="off"
              ></input>
              <input
                type="text"
                className="inputdiva"
                name="address"
                onChange={(e) => setAdd(e.target.value)}
                placeholder="Enter Your address"
                autoComplete="off"
              ></input>
              <input
                type="email"
                className="inputdiva"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter E-mail"
                autoComplete="off"
              ></input>
              <input
                type="password"
                className="inputdiva"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="off"
              ></input>
              <button onClick={onClicks} className="signinbut">
                Create account
              </button>
            </div>
            <div className="forgetdiv">
              <button className="signupbut" onClick={signIn}>
                <p>Have an Account? Sign in</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Register
