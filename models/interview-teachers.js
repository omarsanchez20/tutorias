const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewTeacherSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Validación para 10 números
            },
            message: props => `${props.value} no es una matrícula válida. Debe tener 10 números.`
        }
    },
    correo: {
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
    esTutor: {
        type: String,
        enum: ['si', 'no'],
        required: true
    },
    numGrupos: {
        type: Number,
        min: 1,
        max: 4
    },
    grupos: [{
        grupoTutoria: {
            type: String,
            enum: ['desarrollo de software y multiplataforma', 'entornos virtuales y negocios digitales']
        },
        gradoTutoria: {
            type: Number,
            min: 1,
            max: 12
        }
    }]
});

const InterviewTeacher = mongoose.model('InterviewTeacher', interviewTeacherSchema);
module.exports = InterviewTeacher;
