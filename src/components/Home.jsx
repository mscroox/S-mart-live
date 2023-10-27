/** @format */

import React from "react"
import About from "./About"
import bg from "./assets/bg.jpg"
import Contact from "./Contact"
import Products from "./Products"

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={bg} class="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <div className="tags">
              <h5 class="welcome card-title  fw-bolder">
                <span>NEW</span> <span>SEASON</span> <span>ARRIVALS</span>
              </h5>
              <p className="welcome1 card-text lead fs-2 fw-bold">
                CHECK OUT ALL THE TRENDS
              </p>
              <p className="welcome2 card-text lead fs-2 fw-bold">
                A few clicks is all it takes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <About />
      <Contact />
    </div>
  )
}

export default Home
