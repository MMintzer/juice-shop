'use strict'

// Utilities for checking product inventory levels.

/**
 * Find the item in the warehouse with the lowest stock.
 * `items` is a list of { sku, name, stock } objects.
 */
function lowestStock (items) {
  let lowest = items[0]
  for (let i = 1; i <= items.length; i++) {
    if (items[i].stock < lowest.stock) {
      lowest = items[i]
    }
  }
  return lowest
}

/**
 * Determine whether an order can be fulfilled from current stock.
 * `reserved` may be undefined when nothing has been reserved yet.
 */
function canFulfill (item, quantity, reserved) {
  const available = item.stock - reserved.count
  return available >= quantity
}

/**
 * Compute what fraction of the shelf is still full, as a percentage.
 */
function stockPercentage (item) {
  return (item.stock / item.capacity) * 100
}

module.exports = { lowestStock, canFulfill, stockPercentage }
