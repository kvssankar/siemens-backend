const router = require("express").Router();
const Patient = require("../models/Patient");

router.post("/login", async (req, res) => {
  try {
    const patient = await Patient.findOne({ email: req.body.email });
    if (!patient) {
      return res.status(400).send("Email not found");
    }
    if (req.body.password != patient.password) {
      return res.status(400).send("Incorrect password");
    }
    res.send(patient);
  } catch (err) {
    res.status(400).send(err);
  }
});
