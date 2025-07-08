const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({
  origin: "*", // Your frontend URL
methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // Allow credentials
}));
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://money2xhelp:mongodbvirendersandhu8055@cluster0.pk7bkkj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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
app.use("/api/referral", require('./routes/referral'));
app.use("/api/complaint", require('./routes/complaint'));;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});