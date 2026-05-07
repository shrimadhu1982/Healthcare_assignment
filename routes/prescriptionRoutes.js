const express = require("express");

const router = express.Router();

const prescriptionController =
  require("../controllers/prescriptionController");

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("doctor"),
  prescriptionController.createPrescription
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("doctor"),
  prescriptionController.updatePrescription
);

router.get(
  "/",
  authMiddleware,
  prescriptionController.getPrescriptions
);

module.exports = router;