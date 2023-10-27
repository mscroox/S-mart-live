/** @format */

import React from "react"
import check from "./assets/check.gif"

const Check = () => {
  return (
    <div className="swagatmain text-center py-5 my-5 ">
      <img src={check} alt="" height="150px" width="200px" />
      <h1 className="swagat">
        Hi, {localStorage.getItem("Name")} Welcome to S-mart
      </h1>
    </div>
  )
}

export default Check
