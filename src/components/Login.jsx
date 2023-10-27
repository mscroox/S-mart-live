/** @format */

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginCheck } from "../redux/action"
import Redirect from "./Redirect"
// import Check from "./Check"
import Register from "./Register"

const Login = () => {
  const [login, setLogin] = useState(true)
  const [emailLog, setEmailLog] = useState("")
  const [passLog, setPassLog] = useState("")
  const [check, setCheck] = useState(false)
  const state = useSelector((state) => state.userState)

  const dispatch = useDispatch()
  const userCheck = (address) => {
    dispatch(loginCheck(address))
  }

  const onClicks = () => {
    const email = localStorage.getItem("Email")
    const password = localStorage.getItem("Password")
    const address = localStorage.getItem("Address")
    dispatch(loginCheck(address))

    // const name = localStorage.getItem("Name")
    // const phone = localStorage.getItem("Phone")

    if (emailLog === email && passLog === password) {
      setCheck(true)
      userCheck(address)
    } else {
      alert("User Id & Password doesn't Match")
    }
  }

  const signUp = () => {
    setLogin(!login)
  }

  return (
    <>
      {check ? (
        <Redirect />
      ) : (
        <div>
          {login ? (
            <div className="containersd">
              <div className="center">
                <h1 className="h1ab">Login</h1>
                <br />
                <br />
                <div className="inputdiv">
                  <input
                    type="email"
                    className="inputdiva"
                    name="email"
                    onChange={(e) => setEmailLog(e.target.value)}
                    placeholder="Enter your UserId"
                    autoComplete="off"
                    required
                  ></input>
                  <input
                    type="password"
                    className="inputdiva"
                    name="password"
                    onChange={(e) => setPassLog(e.target.value)}
                    placeholder="Enter password"
                    autoComplete="off"
                    required
                  ></input>
                  <button
                    type="submit"
                    className="signinbut"
                    onClick={onClicks}
                  >
                    Sign in
                  </button>
                </div>
                <div className="forgetdiv">
                  <button className="signupbut" onClick={signUp}>
                    <p> Sign up</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Register />
          )}
        </div>
      )}
    </>
  )
}

export default Login
