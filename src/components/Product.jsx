/** @format */

import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { addCart } from "../redux/action"
import logo from "./assets/4dots.gif"

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [addbut, setAddbut] = useState("Add to cart")

  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="text-center">
          <img src={logo} alt="" height={65} width={200} />
        </div>
      </>
    )
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="productmain">
          <div className="pimgmain">
            <img
              src={product.image}
              alt={product.title}
              className="pimg"
              height="450px"
              width="450px"
            />
          </div>
          <div className="contentmain">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <span> </span>
              <i className="fa fa-star"></i>
            </p>
            <h3 className=" display-6 fw-bold my-4">${product.price}</h3>
            <p className="pdesc lead">{product.description}</p>

            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => {
                return (
                  <>
                    {addProduct(product)}
                    {setAddbut("+")}
                  </>
                )
              }}
            >
              {addbut}
            </button>
            <Link to={`/cart`} className="btn btn-dark mx-3 px-4 py-2">
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}

export default Product
