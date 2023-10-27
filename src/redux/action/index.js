/** @format */

// for add item to cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  }
}

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  }
}

export const incItem = (product) => {
  return {
    type: "INCITEM",
    payload: product,
  }
}

export const decItem = (product) => {
  return {
    type: "DECITEM",
    payload: product,
  }
}

export const loginCheck = (user) => {
  return {
    type: "LOGINCHECK",
    payload: user,
  }
}

export const delUser = (user) => {
  return {
    type: "DELUSER",
    payload: user,
  }
}
