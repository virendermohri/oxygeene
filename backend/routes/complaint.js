const express = require("express");
const router = express.Router();
const User = require("../modles/user");
const Complaint = require("../modles/complaint");
const fectchuser = require("../middleware/fetchuser");

// Create a new complaint
router.post("/", fectchuser, async (req, res) => {
    try {
        const { complaintText,subject } = req.body;
    let success = false;
        // Validate input
        if (!complaintText ||!subject) {
        return res.status(400).json({ message: "Complaint text is required" });
        }
    
        // Create a new complaint
        const complaint = new Complaint({
        userId: req.user.id,
        complaintText,
        subject
        });
        success = true;
    //whatsapp message sent here
        await complaint.save();
        res.status(200).json({ message: "Complaint created successfully", data: complaint , success });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
    }
);

router.get("/all",async (req, res) => {
    try {
        const complaints = await Complaint.find({})
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
// PATCH /api/complaint/:id/status
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status or response text is required" });
    }

    const updateFields = {};
    if (status) updateFields.status = status;

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedComplaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    return res.status(200).json({
      message: "Complaint updated successfully",
      data: updatedComplaint,
    });
  } catch (error) {
    console.error("Error updating complaint:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

module.exports = router;

