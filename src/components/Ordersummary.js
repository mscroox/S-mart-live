/** @format */

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import Inventory2Icon from "@mui/icons-material/Inventory2"
import React from "react"
import { FaCheckCircle, FaHome, FaRegCheckCircle } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Subtotal from "./Subtotal"

const Ordersummary = () => {
  const state = useSelector((state) => state.handleCart)

  return (
    <>
      <div className="mb-5">
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
                <FaCheckCircle />
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
            <Link to="/checkout" className="neelaicon">
              <h2 className="cdcdc">
                <ArrowBackIosIcon />
              </h2>
            </Link>
            <h2 className="neelaicon0">
              <Inventory2Icon />
            </h2>
            <Link to="/checkout/Order/Payment" className="neelaicon">
              <ArrowForwardIosRoundedIcon />
            </Link>
          </div>
        </div>
        <div className="leftse5 text-left mb-0">
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

        {/* cart */}

        {state.map((item) => {
          return (
            <div className="leftse5 text-left mb-0">
              {item.qty ? (
                <div className="maincart">
                  <div className="uppercart d-flex py-4">
                    <div className="item-categoryw ">
                      {/* <h4 className="cate">{item.category}</h4> */}
                      <h4 className="likhit item-title1">
                        <Link to={`/products/${item.id}`} className="neela">
                          {item.title.substring(0, 12)}...
                        </Link>
                      </h4>
                      <p className=" likhit ratings">
                        Rating {item.rating && item.rating.rate}
                        <span> </span>
                        <i className="likhit fa fa-star"></i>
                      </p>
                      <div className=" likhitp main-price ">
                        <h3 className=" likhit itemprice">${item.price}</h3>
                      </div>
                      <div className="pricecal1">
                        <div>
                          <h4 className="likhitc pricecal">
                            {`${item.qty} X ${item.price.toFixed(2)} =  `}
                          </h4>
                        </div>
                        <div>
                          <h3 className="likhitc pricecal">
                            {` $${(item.qty * item.price).toFixed(2)}`}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="maincartimg p-2 text-left">
                      <Link to={`/products/${item.id}`} className="neela">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="cartimg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <section></section>
              )}
            </div>
          )
        })}
        <div className="nichumain">
          <div className="nichuc1">
            <Subtotal />
          </div>
          <div className="nichuc2">
            <Link to="/checkout/Order/Payment" className="neelaicon">
              <button className="nextcheckoutg">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ordersummary
