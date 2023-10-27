/** @format */

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import empty from "./assets/Cart-empty.gif"
import Cart from "./Cart"

const Showcart = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      {state.length ? (
        <div>
          <div className="arrow">
            <div className="arrow1  ">
              <Link to="/products" className="neelaicon">
                <h2 className="cdcdc">
                  <ArrowBackIosIcon />
                </h2>
              </Link>
              <h2 className="neelaicon0">
                <ShoppingCartIcon />
              </h2>
              <Link to="/checkout" className="neelaicon">
                <ArrowForwardIosRoundedIcon />
              </Link>
            </div>
          </div>
          <Cart />
        </div>
      ) : (
        <div className="emptyimg">
          <img className="emptyimg1" src={empty} alt="" />
        </div>
      )}
    </div>
  )
}

export default Showcart
