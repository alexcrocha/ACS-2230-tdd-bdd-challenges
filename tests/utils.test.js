const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("Should return the area of a rectangle", function () {
  const area = utils.area(5, 10)
  expect(area).to.be.a("number")
  expect(area).to.equal(50)
})

it("Should return the perimeter of a rectangle", function () {
  const perimeter = utils.perimeter(5, 10)
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal(30)
})

it("Should return the area of a circle with radius", function () {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.be.a("number")
  expect(circleArea).to.equal(Math.PI * 5 * 5)
})

it("Should return null if width is negative", function () {
  const area = utils.area(-5, 10)
  const perimeter = utils.perimeter(-5, 10)
  expect(area).to.be.null
  expect(perimeter).to.be.null
})

it("Should return null if breadth is negative", function () {
  const area = utils.area(5, -10)
  const perimeter = utils.perimeter(5, -10)
  expect(area).to.be.null
  expect(perimeter).to.be.null
})

it("Should return null if radius is negative", function () {
  const circleArea = utils.circleArea(-5)
  expect(circleArea).to.be.null
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const kleenex = utils.createItem("kleenex", 2.99)
  expect(kleenex).to.be.a("object")
  expect(kleenex).to.have.property("name", "kleenex")
  expect(kleenex).to.have.property("price", 2.99)
  expect(kleenex).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function () {
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart).to.be.a("array")
  expect(shoppingCart.length).to.equal(0)
})

it("Should add a new item to the shopping cart", function () {
  const notebook = utils.createItem("notebook", 5.99)
  utils.addItemToCart(notebook)
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart.length).to.equal(1)
  expect(shoppingCart[0]).to.have.property("name", "notebook")
  expect(shoppingCart[0]).to.have.property("price", 5.99)
  expect(shoppingCart[0]).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", function () {
  const clementine = utils.createItem("clementine", 0.99)
  utils.addItemToCart(clementine)
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.a("number")
  expect(numItems).to.equal(1)
})

it("Should remove items from cart", function () {
  const fig = utils.createItem("fig", 3.99)
  utils.addItemToCart(fig)
  utils.removeItemFromCart(fig)
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart.length).to.equal(0)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function () {
  const banana = utils.createItem("banana", 0.99)
  utils.addItemToCart(banana)
  utils.updateItemQuantity(banana, 5)
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart.length).to.equal(1)
  const itemIndex = shoppingCart.findIndex((cartItem) => {
    return cartItem.name === banana.name
  })
  expect(shoppingCart[itemIndex]).to.have.property("quantity", 5)
})


it("Should validate that an empty cart has 0 items", function () {
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.equal(0)
})

it("Should return the total cost of all items in the cart", function () {
  const apple = utils.createItem("pineapple", 3.99)
  const pen = utils.createItem("pen", 0.99)
  utils.addItemToCart(apple)
  utils.addItemToCart(pen)
  const totalCost = utils.getTotalCost()
  expect(totalCost).to.be.a("number")
  expect(totalCost).to.equal(4.98)
})
