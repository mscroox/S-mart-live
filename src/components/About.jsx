/** @format */

import React from "react"
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa"

const About = () => {
  return (
    <>
      <div className="mainabout">
        <h1>About us</h1>
        <div className="centerabout">
          <div className="col-md-4">
            <h1 className="l1">S-Mart</h1>
            <h5 className="l5">We provide what you want</h5>
            <h5 className="l5"> Careers</h5>
            <h5 className="l5">Press Releases</h5>
            <h5 className="l5">S-mart Cares</h5>
            <h5 className="l5">Gift a Smile</h5>
            <h5 className="l5">S-mart Science</h5>
          </div>
          <div className="col-md-4">
            <h1 className="l1">Connect with us</h1>
            <h5 className="l">
              <a
                href="https://www.facebook.com/Techmine-Solutions-101988859090147/?ref=pages_you_manage"
                target="blank"
              >
                <FaFacebookSquare />
              </a>
            </h5>
            <h5 className="l">
              <a
                className="iwhatsapp"
                href="https://api.whatsapp.com/send?phone=917983537351&text=Hi+,+S-mart+I+have+a+query"
                target="blank"
              >
                <FaWhatsapp />
              </a>
            </h5>
            <h5 className="l">
              <a
                className="iinsta"
                href="https://www.instagram.com/mohit._.sharma52/"
                target="blank"
              >
                <FaInstagramSquare />
              </a>
            </h5>
          </div>
          <div className="col-md-4">
            <h1 className="l1"> Let us help you</h1>
            <h5 className="l5">COVID-19 and S-Mart</h5>
            <h5 className="l5">Your Account</h5>
            <h5 className="l5">Returns Centre</h5>
            <h5 className="l5">100% Purchase Protection</h5>
            <h5 className="l5">S-mart App Download</h5>
            <h5 className="l5">s-mart Assistant Download</h5>
            <h5 className="l5">Help</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
