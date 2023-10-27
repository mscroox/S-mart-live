/** @format */

import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import payment from "./assets/paymentqr.jpg"
import logo from "./assets/pelogo.png"
import Subtotal from "./Subtotal"

const Phonepe = () => {
  return (
    <>
      <div className="checkcircle">
        <Link to="/checkout" className="neelaicon">
          <div className="addc ">
            <i>
              <FaCheckCircle />
            </i>
            <h6 className="likhit2">Address</h6>
          </div>
        </Link>
        <Link to="/checkout/Order" className="neelaicon">
          <div className="orderc">
            <i>
              <FaCheckCircle />
            </i>
            <h6 className="likhit2">Order Summary</h6>
          </div>
        </Link>
        <Link to="/checkout/Order/Payment" className="neelaicon">
          <div className="payc">
            <i>
              <FaCheckCircle />
            </i>
            <h6 className="likhit2">Payment</h6>
          </div>
        </Link>
      </div>

      <div className="paydiv">
        <i>
          <img src={logo} alt="" width="60px" height="65px" />
          <img className="payimg" src={payment} alt="" />
        </i>
        <div className="uperse2 pb-5 mb-5">
          <h4 className="likhit1">Scan QR code in your mobile phone pay app</h4>
          <Subtotal />
        </div>
      </div>
    </>
  )
}

export default Phonepe
