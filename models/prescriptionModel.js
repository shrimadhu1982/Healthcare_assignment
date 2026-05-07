const db = require("../config/db");

const createPrescription = (
  doctor_id,
  patient_id,
  medicine,
  dosage,
  notes,
  callback
) => {

  db.run(
    `INSERT INTO prescriptions
    (doctor_id, patient_id, medicine, dosage, notes)
    VALUES(?,?,?,?,?)`,
    [
      doctor_id,
      patient_id,
      medicine,
      dosage,
      notes
    ],
    callback
  );

};

const getDoctorPrescriptions = (
  doctor_id,
  callback
) => {

  db.all(
    "SELECT * FROM prescriptions WHERE doctor_id=?",
    [doctor_id],
    callback
  );

};

const getPatientPrescriptions = (
  patient_id,
  callback
) => {

  db.all(
    "SELECT * FROM prescriptions WHERE patient_id=?",
    [patient_id],
    callback
  );

};

const updatePrescription = (
  id,
  medicine,
  dosage,
  notes,
  callback
) => {

  db.run(
    `UPDATE prescriptions
     SET medicine=?, dosage=?, notes=?
     WHERE id=?`,
    [medicine, dosage, notes, id],
    callback
  );

};

module.exports = {
  createPrescription,
  getDoctorPrescriptions,
  getPatientPrescriptions,
  updatePrescription,
};