const Interviewn1 = require('../models/interview-n1');


//crear

exports.createInterviewn1 = async (req, res) => {
    const interviewData = req.body;

    try {
        const interview = new Interviewn1(interviewData);
        const newInterview = await interview.save();
        res.status(201).json(newInterview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// mostrar

exports.getAllInterviewn1 = async (req, res) => {
  try {
      const interviews = await Interviewn1.find();
      res.json(interviews);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

// por matricula


// Controlador para obtener entrevistas por matrícula
exports.getInterviewsByMatricula = async (req, res) => {
    try {
        const matricula = req.params.matricula;
        const interviews = await Interviewn1.find({ Matricula: matricula });
        res.json(interviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// actualizae

exports.updateInterviewn1 = async (req, res) => {
    const interviewData = req.body;

    try {
        // Buscar la entrevista por un campo único
        const existingInterview = await Interviewn1.findOne({
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

exports.filterInterview = async ( req, res ) => {
    const { especialidad, grado, grupo } = req.query;
    console.log(req.query);

    try {
        // Buscar la entrevista por un campo único
        const filtered = await Interviewn1.find({grupo: grupo, grado: grado, especialidad: especialidad});

        console.log(filtered);

        res.json(filtered);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const { matricula } = req.query;
        console.log('Matricula recibida:', matricula);

        if (!matricula) {
            return res.status(400).json({ message: 'Matrícula no proporcionada' });
        }

        const deleted = await Interviewn1.findOneAndDelete({ Matricula: matricula });
        console.log('Registro eliminado:', deleted);

        if (!deleted) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};