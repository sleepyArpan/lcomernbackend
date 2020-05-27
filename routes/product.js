const express = require("express");
const router = express.Router();

const {
  isSignedIn,
  isAdmin,
  isAuthenticated,
} = require("../controllers/auth.js");
const { getUserById } = require("../controllers/user.js");
const {
  getProductById,
  createProduct,
  getProduct,
  getPhoto,
  updateProduct,
  removeProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product.js");

// Params
router.param("userId", getUserById);
router.param("productId", getProductById);

// Routes
// Create
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

//Read
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", getPhoto);

// Delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeProduct
);

// Update
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

// Listing
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;
