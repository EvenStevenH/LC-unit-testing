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
	it("should filter products correctly", () => {
		expect(filterProducts([apple, pineapple, banana]), (product) => product.toUpperCase()).toBe([APPLE, PINEAPPLE, BANANA]);
	});

	it("should handle a invalid callback", () => {
		expect(filterProducts([apple, pineapple, banana]), 3).toBe([]);
	});

	it("should handle an empty array", () => {
		expect(filterProducts([]), (product) => product.toUpperCase()).toBe([]);
	});
});

describe("sortInventory", () => {
	it("should sort multiple items", () => {
		expect(sortInventory(["cup", "phone", "book"]), "cup").toBe("cup");
	});

	it("should attempt to sort with invalid key", () => {
		expect(sortInventory(["cup", "phone", "book"], 3)).toBe([]);
	});

	it("should attempt to sort an empty array", () => {
		expect(sortInventory([]), "cup").toBe([]);
	});
});
