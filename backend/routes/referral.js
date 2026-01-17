const express = require("express");
const User = require("../modles/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fetchuser = require("../middleware/fetchuser");
const jwt_sec = "sandhuisgodboy"
const router = express.Router();

router.post("/generate", async (req, res) => {
    try {
        const { email, referral } = req.body;

        if (!email || !referral) {
            return res.status(400).json({ success: false, message: "Email and referral code are required" });
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if(user.referral_code) {
            return res.status(400).json({ success: false, message: "Referral code already exists for this user" });
        }
        const existingReferral = await User.findOne({ referral_code: referral });
        if (existingReferral ) {
            return res.status(400).json({ success: false, message: "Referral code exist try somthing different" });
        }
        user.referral_code = referral;

        await user.save();
      

        res.status(200).json({ success: true, message: "Referral code generated successfully" });

    }
    catch (error) {
        console.error("Error :", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})
router.post("/verify",async (req, res) => {
    try {
        const { referral } = req.body;

        if (!referral) {
            return res.status(400).json({ success: false, message: "Referral code is required" });
        }

        const existingReferral = await User.findOne({ referral_code: referral });

        if (existingReferral) {
            return res.status(200).json({ success: true, message: "Referral code is valid", user: existingReferral });
        } else {
            return res.status(404).json({ success: false, message: "Referral code not found" });
        }
        
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});
module.exports = router;