const prescriptionModel =
  require("../models/prescriptionModel");

exports.createPrescription = (req, res) => {

  const doctor_id = req.user.id;

  const {
    patient_id,
    medicine,
    dosage,
    notes
  } = req.body;

  prescriptionModel.createPrescription(
    doctor_id,
    patient_id,
    medicine,
    dosage,
    notes,
    (err) => {

      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Prescription Created",
      });

    }
  );
};

exports.getPrescriptions = (req, res) => {

  if (req.user.role === "doctor") {

    prescriptionModel.getDoctorPrescriptions(
      req.user.id,
      (err, rows) => {
        res.json(rows);
      }
    );

  } else {

    prescriptionModel.getPatientPrescriptions(
      req.user.id,
      (err, rows) => {
        res.json(rows);
      }
    );

  }
};

exports.updatePrescription = (req, res) => {

  const { id } = req.params;

  const {
    medicine,
    dosage,
    notes
  } = req.body;

  prescriptionModel.updatePrescription(
    id,
    medicine,
    dosage,
    notes,
    (err) => {

      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Prescription Updated",
      });

    }
  );
};