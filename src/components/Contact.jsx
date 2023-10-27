/** @format */

import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="mainabout">
      <h1>Contact us</h1>
      <div className="centerabout">
        <div className="col-md-6 text-center">
          <h2 className="l1">Office</h2>
          <p className="l5">Office no: 2, S-mart, Moti Manzil,</p>
          <p className="l5">Mathura (281006)</p>
        </div>
        <div className="col-md-6">
          <h2 className="l1">Contact Details</h2>
          <p className="l5">ms71727374@gmail.com</p>
          <p className="l5">
            <a
              className="iwhatsapp"
              href="https://api.whatsapp.com/send?phone=917983537351&text=Hi+,+S-mart+I+have+a+query"
              target="blank"
            >
              <FaWhatsapp />
            </a>{" "}
            91+ 7983537351
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
