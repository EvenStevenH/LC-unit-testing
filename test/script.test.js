const { calculateDiscount, filterProducts, sortInventory } = require("../script");

describe("calculateDiscount", () => {
  it("should applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
  });

  it("should handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
  });

  it("should handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
  });
});

describe("filterProducts", () => {
	let products = ["apple", "pineapple", "banana"];

	it("should filter products correctly", () => {
		expect(filterProducts(products, (product) => product.length > 6)).toEqual(["pineapple"]);
	});

	it("should handle a invalid callback", () => {
		expect(filterProducts(products, 3)).toEqual([]);
	});

	it("should handle an empty array", () => {
		expect(filterProducts([], (product) => product.length > 6)).toEqual([]);
	});
});

describe("sortInventory", () => {
	const inventory = [
		{ name: "cup", quantity: 30 },
		{ name: "pencil", quantity: 20 },
		{ name: "pen", quantity: 40 },
	];

	it("should sort multiple items by key of quantity", () => {
		expect(sortInventory(inventory, "quantity")).toEqual([
			{ name: "pencil", quantity: 20 },
			{ name: "cup", quantity: 30 },
			{ name: "pen", quantity: 40 },
		]);
	});

	it("should attempt to sort with invalid key", () => {
		expect(sortInventory(inventory, 3)).toEqual([]);
	});

	it("should attempt to sort an empty array", () => {
		expect(sortInventory([], "quantity")).toEqual([]);
	});
});
