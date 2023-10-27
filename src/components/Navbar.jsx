/** @format */

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { delUser } from "../redux/action"
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const stateu = useSelector((state) => state.userState)

  const dispatch = useDispatch()

  const removeuser = () => {
    dispatch(delUser(localStorage.getItem("Address")))
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
        <div className="container-fluid">
          <div className="logo">S-mart</div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              {stateu.address ? (
                <Link
                  to="/logout"
                  onClick={removeuser}
                  className="btn btn-outline-dark "
                >
                  <i className="fa fa-sign-in me-1"></i>
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-outline-dark ">
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </Link>
              )}

              <Link to="/cart" className="btn btn-outline-dark  ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length}
                )
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
