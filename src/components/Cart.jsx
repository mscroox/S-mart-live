/** @format */

import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decItem, incItem } from "../redux/action"
import Subtotal from "./Subtotal"

const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  // const [price, setPrice] = useState()

  const dispatch = useDispatch()
  const inc = (item) => {
    dispatch(incItem(item))
  }

  const dec = (Id) => {
    dispatch(decItem(Id))
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="mb-5 ">
          {state.map((item) => {
            return (
              <div>
                {item.qty ? (
                  <>
                    <div className="maincart ">
                      <div className="uppercart d-flex p-4 ">
                        <div className="maincartimg p-2 text-center width">
                          <Link to={`/products/${item.id}`} className="neela">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="cartimg"
                            />
                          </Link>

                          <div className="changeblock ">
                            <button
                              onClick={() => dec(item)}
                              className="incbut"
                            >
                              <RemoveIcon />
                            </button>
                            <button className="qtybut">{item.qty}</button>
                            <button
                              onClick={() => inc(item)}
                              className="incbut"
                            >
                              <AddIcon />
                            </button>
                          </div>
                        </div>
                        <div className="item-categoryw ">
                          {/* <h4 className="cate">{item.category}</h4> */}
                          <h4 className="likhit item-title1">
                            <Link to={`/products/${item.id}`} className="neela">
                              {item.title.substring(0, 12)}...
                            </Link>
                          </h4>
                          <p className=" likhit1 ratings mb-0 pb-0">
                            Rating {item.rating && item.rating.rate}
                            <span> </span>
                            <i className="likhit fa fa-star"></i>
                          </p>
                          <div className=" likhit1 main-price ">
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
                      </div>
                    </div>
                    <div className="nichumain">
                      <div className="nichuc1">
                        <Subtotal />
                      </div>
                      <div className="nichuc2">
                        <Link to="/checkout" className="neelaicon">
                          <button className="nextcheckoutg">Place Order</button>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <section></section>
                )}
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container py-1">
        <div className="row pt-2  d-flex">
          <ShowProduct />
          <div className="container text-center md-5">
            <h1>{}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
