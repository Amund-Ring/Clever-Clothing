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
    sum = sum + lineItem.item.price;
  });

  console.log(typeof(sum));

  return sum;
}

const shoppingCartApi = {
  getCartFromLocalStorage,
  addToCart,
  getAmountInCart,
  getTotalSum
};

export default shoppingCartApi;
