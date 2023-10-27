/** @format */

import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "./assets/4dots.gif"

const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setloading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setloading(true)
      const response = await fetch("https://fakestoreapi.com/products")
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setloading(false)
      }

      return () => {
        componentMounted = false
      }
    }

    getProducts()
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

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="nichebar buttons d-flex justify-content-center my-1 pb-2 p-2">
          <button
            className="baar btn btn-outline-dark"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="baar btn btn-outline-dark ms-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="baar btn btn-outline-dark ms-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="baar btn btn-outline-dark ms-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="baar btn btn-outline-dark ms-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="sbsemain">
          {filter?.map((product) => {
            return (
              <>
                <div className="cardpm ">
                  <div className="cardpc" key={product.id}>
                    <div className="cardimgdiv">
                      <NavLink to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          className="cardimgx"
                          alt={product.title}
                          width="100px"
                        />
                      </NavLink>
                    </div>
                    <div className="card-body m-0">
                      <NavLink to={`/products/${product.id}`} className="neela">
                        <h5 className="likhit1 titlebc">
                          {product.title.substring(0, 12)}..
                        </h5>
                      </NavLink>

                      <p className="likhit1 titlebc">${product.price}</p>
                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </>
    )
  }

  return <> {loading ? <Loading /> : <ShowProducts />}</>
}

export default Products
