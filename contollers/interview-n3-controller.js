const Interviewn3 = require('../models/interview-n3');



exports.getAllInterviewn3 = async (req, res) => {
  try {
      const interviews = await Interviewn3.find();
      res.json(interviews);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


exports.createInterviewn3 = async (req, res) => {
  const interviewData = req.body;

  try {
      const interview = new Interviewn3(interviewData);
      const newInterview = await interview.save();
      res.status(201).json(newInterview);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};


// Controlador para actualizar entrevistas en Interviewn3
exports.updateInterviewn3 = async (req, res) => {
    const interviewData = req.body;

    try {
        // Buscar la entrevista por algún campo único, por ejemplo, nombre y apellido
        const existingInterview = await Interviewn3.findOne({
            Matricula: interviewData.Matricula,
        });

        if (!existingInterview) {
            return res.status(404).json({ message: 'Entrevista no encontrada' });
        }

        // Actualizar los campos de la entrevista
        Object.assign(existingInterview, interviewData);
        const updatedInterview = await existingInterview.save();

        res.json(updatedInterview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
