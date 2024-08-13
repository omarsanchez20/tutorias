const InterviewTeacher = require('../models/interview-teachers');
// Crear un nuevo registro
exports.createInterviewTeacher = async (req, res) => {
    try {
        const newInterviewTeacher = new InterviewTeacher(req.body);
        await newInterviewTeacher.save();
        res.status(201).json(newInterviewTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los registros
exports.getAllInterviewTeachers = async (req, res) => {
    try {
        const interviewTeachers = await InterviewTeacher.find();
        res.status(200).json(interviewTeachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro
exports.updateInterviewTeacher = async (req, res) => {
    try {
        const { matricula, ...updateData } = req.body;
        const updatedInterviewTeacher = await InterviewTeacher.findOneAndUpdate(
            { matricula },
            updateData,
            { new: true }
        );
        if (!updatedInterviewTeacher) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(updatedInterviewTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un registro
exports.deleteInterviewTeacher = async (req, res) => {
    try {
        const { matricula } = req.body;
        const deletedInterviewTeacher = await InterviewTeacher.findOneAndDelete({ matricula });
        if (!deletedInterviewTeacher) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};