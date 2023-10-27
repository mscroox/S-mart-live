/** @format */

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Check from "./Check"

const Redirect = () => {
  const [timer, setTimer] = useState(3)
  const navigate = useNavigate()

  const TimeOut = () => {
    let timeOut = 3
    for (let i = 0; i <= timeOut; i++) {
      setTimeout(() => {
        setTimer(timeOut - i)
      }, i * 1000)
    }
  }

  useEffect(() => {
    TimeOut()
  }, [])

  useEffect(() => {
    if (timer === 0) {
      navigate("/cart")
    }
  }, [timer])

  return (
    <>
      <div>
        <h1>
          <Check />
        </h1>
      </div>
    </>
  )
}

export default Redirect
