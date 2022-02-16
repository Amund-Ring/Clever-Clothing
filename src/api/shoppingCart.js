//Returns the cart from local storage or initializes a new one
function getCartFromLocalStorage() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('shoppingCartCL') === null) {
      localStorage.setItem('shoppingCartCL', JSON.stringify([]));
      return [];
    }
    const cart = JSON.parse(localStorage.getItem('shoppingCartCL'));
    return cart;
  }
  return [];
}

//Adds the given item to the shopping cart
function addToCart(item) {
  let shoppingCart = getCartFromLocalStorage();
  shoppingCart = [...shoppingCart, item];
  if (typeof window !== 'undefined') {
    localStorage.setItem('shoppingCartCL', JSON.stringify(shoppingCart));
  }
}

//Returns the sum total for the products in the shopping cart
function getTotalSum() {
  const currentCart = getCartFromLocalStorage();
  let sum = 0;

  currentCart.forEach(lineItem => {
    sum = sum + lineItem.item.price;
  });

  return sum;
}

//Returns total number of order lines currently in the shopping cart
function getAmountInCart() {
  const shoppingCart = getCartFromLocalStorage();
  return shoppingCart.length;
}

//Removes the given cartItem from the shopping cart and returns amount of items left in cart
function deleteCartItem(itemID) {
  const currentCart = getCartFromLocalStorage();

  const updatedCart = currentCart.filter(
    item => item.id !== itemID
  );

  if (typeof window !== "undefined") {
    localStorage.setItem("shoppingCartCL", JSON.stringify(updatedCart));
  }

  return updatedCart.length;
}



const shoppingCartApi = {
  getCartFromLocalStorage,
  addToCart,
  getTotalSum,
  getAmountInCart,
  deleteCartItem
};

export default shoppingCartApi;
