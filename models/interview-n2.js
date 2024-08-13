const mongoose = require('mongoose');

// Definición del esquema para el nuevo modelo
const Interviewn2Schema = new mongoose.Schema({
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
  bachillerato_egresado: {
    type: String,
    required: true
  },
  especialidad_bachillerato: {
    type: String,
    required: true
  },
  promedio_general: {
    type: Number,
    required: true
  },
  materias_dificultan: {
    type: [String],
    required: true
  },
  utiliza_tecnicas_estudio: {
    type: String,
    required: true
  },
  tecnicas_estudio: {
    type: [String],
    required: true
  }
});

// Crear el modelo 'SecondaryEducation' a partir del esquema
const Interviewn2 = mongoose.model('interviewn2', Interviewn2Schema);

// Exportar el modelo para poder utilizarlo en otras partes de la aplicación
module.exports = Interviewn2;
