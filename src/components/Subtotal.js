/** @format */

import React from "react"
import { useSelector } from "react-redux"

const Subtotal = () => {
  const state = useSelector((state) => state.handleCart)

  return (
    <h2 className="likhit2 ">
      Total: $
      {state
        .reduce((state, item) => state + item.price * item.qty, 0)
        .toFixed(2)}
    </h2>
  )
}

export default Subtotal
