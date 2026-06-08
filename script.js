function calculateDiscount(price, discountRate) {
  if (typeof price !== "number" || typeof discountRate !== "number") return null;
  if (discountRate < 0 || discountRate > 1) return null;
  return price - discountRate * price;
}

function filterProducts(products, callback) {
	if (!Array.isArray(products) || typeof callback !== "function") return [];
	return products.filter(callback);
}

function sortInventory(inventory, key) {
	if (!Array.isArray(inventory) || typeof key !== "string") return [];
	return inventory.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

module.exports = { calculateDiscount, filterProducts, sortInventory };

console.log(
	sortInventory([
		{ name: "cup", quantity: 30 },
		{ name: "pencil", quantity: 20 },
		{ name: "pen", quantity: 40 },
	]),
);
