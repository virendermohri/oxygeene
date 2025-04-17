const express = require("express");
const router = express.Router();
const Caretaker = require("../modles/caretaker");
router.post("/", async (req, res) => {
  try {
    const { email, phone } = req.body;

    // Check for existing caretaker by email or phone
    const existing = await Caretaker.findOne({
      $or: [{ email }, { phone }],
    });

    if (existing) {
      return res.status(400).json({
        message: "Caretaker already exists with this email or phone number.",
      });
    }

    const newCaretaker = new Caretaker(req.body);
    await newCaretaker.save();

    res.status(201).json({ message: "Caretaker created", data: newCaretaker });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 🔍 GET All Caretakers
router.get("/", async (req, res) => {
  try {
    const caretakers = await Caretaker.find();
    res.status(200).json(caretakers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch caretakers", error: err.message });
  }
});

// 🔍 GET Single Caretaker by ID
router.get("/:id", async (req, res) => {
  try {
    const caretaker = await Caretaker.findById(req.params.id);
    if (!caretaker) return res.status(404).json({ message: "Caretaker not found" });

    res.status(200).json(caretaker);
  } catch (err) {
    res.status(500).json({ message: "Error fetching caretaker", error: err.message });
  }
});

// ✏️ UPDATE Caretaker by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Caretaker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Caretaker not found" });

    res.status(200).json({ message: "Caretaker updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Update error", error: err.message });
  }
});

// ❌ DELETE Caretaker by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Caretaker.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Caretaker not found" });

    res.status(200).json({ message: "Caretaker deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
});

module.exports = router;
