/**
 * Calculate the total price of all items in the cart
 * @param {Array} cart - Array of cart items with price and amount properties
 * @returns {number} Total price
 */
export const calculateCartTotal = (cart) => {
  if (!Array.isArray(cart)) {
    return 0;
  }
  return cart.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const amount = item.amount || 0;
    return acc + (price * amount);
  }, 0);
};

/**
 * Calculate the total quantity of items in the cart
 * @param {Array} cart - Array of cart items with amount property
 * @returns {number} Total quantity
 */
export const calculateCartQuantity = (cart) => {
  if (!Array.isArray(cart)) {
    return 0;
  }
  return cart.reduce((acc, item) => acc + (item.amount || 0), 0);
};

/**
 * Filter products by search query
 * @param {Array} products - Array of products
 * @param {string} query - Search query
 * @returns {Array} Filtered products
 */
export const filterProductsByQuery = (products, query) => {
  if (!Array.isArray(products)) {
    return [];
  }
  if (!query || query.trim() === '') {
    return products;
  }
  const lowerQuery = query.toLowerCase();
  return products.filter((product) =>
    product.title && product.title.toLowerCase().includes(lowerQuery)
  );
};
