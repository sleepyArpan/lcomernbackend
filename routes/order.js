const express = require("express");
const router = express.Router();

const {
  isSignedIn,
  isAdmin,
  isAuthenticated,
} = require("../controllers/auth.js");
const {
  getUserById,
  pushOrderInPurchaseList,
} = require("../controllers/user.js");
const {
  getOrderById,
  createOrder,
  getAllOrders,
  updateStatus,
  getOrderStatus,   
} = require("../controllers/order.js");
const { updateStock } = require("../controllers/product.js");

// Params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

// Routes
// Create
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateStock,
  createOrder
);

//Read
router.get(
  "/order/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

// Status of order
router.get(
  "/order/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getOrderStatus
);
router.put(
  "/order/:orderId/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateStatus
);

module.exports = router;
