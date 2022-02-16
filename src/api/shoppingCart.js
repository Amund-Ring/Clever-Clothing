//Returns the cart from local storage or initializes a new one
function getCartFromLocalStorage() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('shoppingCart') === null) {
      localStorage.setItem('shoppingCart', JSON.stringify([]));
      return [];
    }
    const cart = JSON.parse(localStorage.getItem('shoppingCart'));
    return cart;
  }
  return [];
}

//Adds the given item to the shopping cart
function addToCart(item) {
  let shoppingCart = getCartFromLocalStorage();
  shoppingCart = [...shoppingCart, item];
  if (typeof window !== 'undefined') {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
}

//Returns total number of order lines currently in the shopping cart
function getAmountInCart() {
  const shoppingCart = getCartFromLocalStorage();
  return shoppingCart.length;
}

//Returns the sum total for the products in the shopping cart
function getTotalSum() {
  const currentCart = getCartFromLocalStorage();
  let sum = 0;

  currentCart.forEach(lineItem => {
    sum = sum + parseInt(lineItem.price, 10);
  });

  return sum;
}

export default {
  getCartFromLocalStorage,
  addToCart,
  getAmountInCart,
  getTotalSum
};
