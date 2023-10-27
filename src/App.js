/** @format */

import { Provider } from "react-redux"
import { HashRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./components/About"
import Checkout from "./components/Checkout"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Ordersummary from "./components/Ordersummary"
import Payment from "./components/Payment"
import Phonepe from "./components/Phonepe"
import Product from "./components/Product"
import Products from "./components/Products"
import Register from "./components/Register"
import Showcart from "./components/Showcart"
import store from "./redux/store"

function App() {
  return (
    <>
      <HashRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/products" element={<Products />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/products/:id" element={<Product />}></Route>
            <Route exact path="/cart" element={<Showcart />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route exact path="/phonepe" element={<Phonepe />}></Route>
            <Route
              exact
              path="/checkout/Order"
              element={<Ordersummary />}
            ></Route>
            <Route
              exact
              path="/checkout/Order/Payment"
              element={<Payment />}
            ></Route>
          </Routes>
        </Provider>
      </HashRouter>
    </>
  )
}

export default App
