const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definición del esquema de User
const userSchema = new mongoose.Schema({
    Matricula: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Validación para 10 números
            },
            message: props => `${props.value} no es una matrícula válida. Debe tener 10 números.`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@uttn\.mx$/.test(v); // Validación para correo de UTTN
            },
            message: props => `${props.value} no es un correo válido de UTTN.`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        required: true,
        enum: ['estudiante', 'docente', 'admin']
    },
});

// Método para comparar la contraseña ingresada con la hasheada
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

// Creación del modelo User
const User = mongoose.model('User', userSchema);

module.exports = User;
