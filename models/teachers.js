const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definición del esquema de Teacher
const teacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'docente']
    }
});

// Método para comparar la contraseña ingresada con la hasheada
teacherSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

// Creación del modelo Teacher
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
