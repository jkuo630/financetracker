const express = require("express");
const cors = require("cors");
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hello");
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
