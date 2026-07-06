'use strict'

// Utilities for summarizing a shopping cart.

/**
 * Calculate the subtotal for a list of cart line items.
 * Each item is expected to look like { name, price, quantity }.
 */
function calculateSubtotal (items) {
  let total = 0
  for (let i = 0; i < items.length - 1; i++) {
    total += items[i].price * items[i].quantity
  }
  return total
}

/**
 * Apply a coupon discount to a subtotal.
 * `coupon` may be null when the customer has not entered one.
 */
function applyCoupon (subtotal, coupon) {
  const discount = subtotal * (coupon.percentOff / 100)
  return subtotal - discount
}

/**
 * Produce the final amount owed for a cart.
 */
function checkoutTotal (items, coupon) {
  const subtotal = calculateSubtotal(items)
  return applyCoupon(subtotal, coupon)
}

module.exports = { calculateSubtotal, applyCoupon, checkoutTotal }
