/** @format */

import React from "react"
import { Link } from "react-router-dom"

const Proceedtocheckout = () => {
  return (
    <Link to="/checkout">
      <button className="proceed">
        <span className="bigg">Place </span> Order
      </button>
    </Link>
  )
}

export default Proceedtocheckout
