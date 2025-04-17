const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
  origin: "*", // Your frontend URL
  methods: ["GET", "POST"], // Allowed methods
  credentials: true // Allow credentials
}));
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/oxygeene");
  console.log('db connected');
}
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/api/auth", require('./routes/auth'));
app.use("/api/bookservice", require('./routes/bookservice'));
app.use("/api/service", require('./routes/service'));
app.use("/api/caretaker", require('./routes/caretaker'));
app.use("/api/product", require('./routes/product'));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});