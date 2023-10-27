/** @format */

const cartw = []

const handleCart = (state = cartw, action) => {
  const product = action.payload

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
    case "INCITEM":
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      )
    case "DECITEM": {
      if (product.qty === 1) {
        return state.filter((x) => x !== product)
      } else {
        return state.map((x) =>
          x.id === product.id && product.qty > 0 ? { ...x, qty: x.qty - 1 } : x
        )
      }
    }
    default:
      return state
  }
}
export default handleCart
