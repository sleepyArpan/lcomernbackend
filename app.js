require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// Route importing
const userRoutes = require("./routes/user.js");
const authRoutes = require("./routes/auth.js");
const categoryRoutes = require("./routes/category.js");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");


// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => console.log("CANNOT CONNECT TO DATABASE"));

// My routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);  
app.use("/api", categoryRoutes);  
app.use("/api", productRoutes); 
app.use("/api", orderRoutes);  



app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
