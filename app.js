const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getMessage, addMessage,
} = require("./controller");


app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Messages
app.get("/messages", getMessage);

// POST a new Message
app.post("/messages", addMessage);

// GET a single Goal
 app.get("/messages/:id", getMessage);

// Update Goal using PUT
// app.put("/goals/:id", updateGoal);

// DELETE a Goal
// app.delete("/goals/:id", deleteGoal);

// DELETE all Goal
// app.delete("/goals", deleteAllGoals);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});