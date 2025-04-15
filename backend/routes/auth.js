const express = require("express");
const User = require("../modles/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fetchuser = require("../middleware/fetchuser");
const jwt_sec = "sandhuisgodboy"
const router = express.Router();
// User Registration
router.post("/signup", async (req, res) => {
  let success = false;
  const { name, phone_number, password ,address,email} = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists with this email", success });
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(password, salt)
    const newUser = new User({ name, phone_number, password: secPass, address, email });
    await newUser.save();
    const data = {
      newUser: {
        id: newUser.id
      }
    }
    success = true;
    const authToken = jwt.sign(data, jwt_sec)

    res.json({ authToken, success, user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error during registration");
  }
});

// User Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let success = false
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Incorrect email address" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Pawword does not match", success });

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, jwt_sec)
    success = true;

    res.json({ success, authToken, user })
  } catch (error) {
    res.status(400).send("Error during login");
  }
});


module.exports = router;


