/** @format */

const userr = []

const userState = (state = userr, action) => {
  const address = action.payload

  switch (action.type) {
    case "LOGINCHECK":
      return { ...state, address }
    case "DELUSER":
      return {}
    default:
      return state
  }
}

export default userState
