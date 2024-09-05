const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// connect to MongoDB
mongoose.connect('mongodb+srv://mentionnot55:Sanjeev12345@cluster0.pmcj6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB Database')
})
.catch(() =>{
    console.log('Connection failed!')
})

app.listen(3000, function () {
  console.log(' server listening on port 3000!')
})
