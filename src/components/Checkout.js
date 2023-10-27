/** @format */

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import HomeIcon from "@mui/icons-material/Home"
import React from "react"
import { FaCheckCircle, FaHome, FaRegCheckCircle } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logoin from "./assets/login.gif"
import Subtotal from "./Subtotal"

const Checkout = () => {
  const state = useSelector((state) => state.userState)
  return (
    <>
      {state.address ? (
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
                  <FaRegCheckCircle />
                </i>
                <h6 className="likhit2">Order Summary</h6>
              </div>
            </Link>
            <Link to="/checkout/Order/Payment" className="neelaicon">
              <div className="payc">
                <i>
                  <FaRegCheckCircle />
                </i>
                <h6 className="likhit2">Payment</h6>
              </div>
            </Link>
          </div>
          <div className="arrow">
            <div className="arrow1">
              <Link to="/cart" className="neelaicon">
                <h2 className="cdcdc">
                  <ArrowBackIosIcon />
                </h2>
              </Link>
              <h2 className="neelaicon0">
                <HomeIcon />
              </h2>
              <Link to="/checkout/Order" className="neelaicon">
                <ArrowForwardIosRoundedIcon />
              </Link>
            </div>
          </div>
          <div className="orderupper1">
            <div className="checkoutcard">
              <div className="centercheckcard">
                <div className="deliverto">
                  <h4 className="likhit2 deliverh3">Deliver to</h4>
                </div>
                <div className="addresscard">
                  <h3 className="likhit1">
                    {localStorage.getItem("Name")}
                    <span> </span>
                    <span className="homeicon">
                      <FaHome />
                    </span>
                  </h3>
                  <p className="likhit2">{localStorage.getItem("Address")}</p>
                  <h2 className="likhit2">{localStorage.getItem("Phone")}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="nichumain">
            <div className="nichuc1">
              <Subtotal />
            </div>
            <div className="nichuc2">
              <Link to="/checkout/Order" className="neelaicon">
                <button className="nextcheckoutg">Next</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <Link to="/login">
            <img src={logoin} alt="" height="300px" width="300px" />
          </Link>
        </div>
      )}
    </>
  )
}

export default Checkout
