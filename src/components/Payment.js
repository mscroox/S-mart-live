/** @format */

import React from "react"
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import gpay from "./assets/gpay.png"
import upi from "./assets/upi.png"

const Payment = () => {
  return (
    <>
      <div className="checkcircle">
        <Link to="/checkout" className="neelaicon">
          <div className="addc ">
            <i>
              <FaRegCheckCircle />
            </i>
            <h6 className="likhit2">Address</h6>
          </div>
        </Link>
        <Link to="/checkout/Order" className="neelaicon">
          <div className="orderc">
            <i>
              <FaRegCheckCircle />
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
      <div className="payupidiv">
        <Link to="/phonepe">
          <img
            className="payupiimg"
            src={upi}
            alt=""
            width="100px"
            height="42px"
          />
        </Link>
      </div>
      <div className="payupidiv">
        <Link to="/phonepe">
          <img
            className="payupiimg"
            src={gpay}
            alt=""
            width="100px"
            height="42px"
          />
        </Link>
      </div>
    </>
  )
}

export default Payment
