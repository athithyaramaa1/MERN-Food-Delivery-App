const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://localhost:5173/loginuser",
};

// Apply CORS middleware with specific options
app.use(cors(corsOptions));

router.post(
  "/createuser",
  [
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.error("Error", err);
      res.json({ success: false, error: err.message });
    }
  }
);

router.post(
  "/loginuser",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Credentials are incorrect!!!" });
      }

      if (password !== userData.password) {
        return res.status(400).json({ errors: "Credentials are incorrect!!!" });
      }

      return res.json({ success: true });
    } catch (err) {
      console.error("Error", err);
      res.json({ success: false, error: err.message });
    }
  }
);

module.exports = router;
