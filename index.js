// 1. calculateTax
function calculateTax(amount, taxRate = 0.1) {
  // returns the tax amount (amount * taxRate), default 10% when taxRate not provided
  return amount * taxRate;
}

// 2. convertToUpperCase
function convertToUpperCase(str) {
  return String(str).toUpperCase();
}

// 3. findMaximum
function findMaximum(a, b) {
  // support calling as findMaximum(num1, num2) or findMaximum([num1, num2, ...])
  if (Array.isArray(a)) {
    if (a.length === 0) return undefined;
    return a.reduce((max, val) => (val > max ? val : max), a[0]);
  }
  if (typeof b !== 'undefined') {
    return a > b ? a : b;
  }
  // single non-array argument
  return a;
}

// 4. isPalindrome
function isPalindrome(input) {
  const s = String(input).toLowerCase().replace(/[^a-z0-9]/g, '');
  return s === s.split('').reverse().join('');
}

// 5. calculateDiscountedPrice
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
