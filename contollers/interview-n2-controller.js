const Interviewn2 = require('../models/interview-n2');

// crear 

exports.createInterviewn2 = async (req, res) => {
  const interviewData = req.body;

  try {
      const interview = new Interviewn2(interviewData);
      const newInterview = await interview.save();
      res.status(201).json(newInterview);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};


// mostrar

exports.getAllInterviewn2 = async (req, res) => {
  try {
      const interviews = await Interviewn2.find();
      res.json(interviews);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};


/// editar

// Controlador para actualizar entrevistas en Interviewn2
exports.updateInterviewn2 = async (req, res) => {
    const interviewData = req.body;

    try {
        // Buscar la entrevista por algún campo único, por ejemplo, nombre y apellido
        const existingInterview = await Interviewn2.findOne({
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
