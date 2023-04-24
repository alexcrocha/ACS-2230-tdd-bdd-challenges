// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  if (w < 0 || h < 0) {
    return null
  } else {
    return w * h
  }
}

const perimeter = (w, h) => {
  // should return the perimeter
  if (w < 0 || h < 0) {
    return null
  } else {
    return 2 * w + 2 * h
  }

}

const circleArea = r => {
  // should return the area of the circle
  if (r < 0) {
    return null
  } else {
    return Math.PI * r * r
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  let total = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].quantity
  }
  return total
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const itemIndex = shoppingCart.findIndex((cartItem) => {
    return cartItem.name === item.name
  })
  shoppingCart.splice(itemIndex, 1)
}

const updateItemQuantity = (item, quantity) => {
  // should update the quantity of the item in the shopping cart
  const itemIndex = shoppingCart.findIndex((cartItem) => {
    return cartItem.name === item.name
  })
  shoppingCart[itemIndex].quantity = quantity
}

const getTotalCost = () => {
  // should return the total cost of all items in the cart
  let total = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity
  }
  return total
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, updateItemQuantity,
  getTotalCost
}
