const mongoose = require('mongoose');

// Definición del esquema para el nuevo modelo
const interviewn4Schema = new mongoose.Schema({
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
  casado: {
    type: String,
    required: true
  },
  tiene_hijos: {
    type: String,
    required: true
  },
  cantidad_hijos: {
    type: String,
    required: true
  },
  enfermedad: {
    type: String,
    required: true
  },
  enfermedad_especifica: {
    type: String,
    required: true
  },
  fuma: {
    type: String,
    required: true
  },
  cantidad_fuma: {
    type: String,
    required: true
  },
  frecuencia_fuma: {
    type: String,
    required: true
  },
  consume_alcohol: {
    type: String,
    required: true
  },
  cantidad_alcohol: {
    type: String,
    required: true
  },
  frecuencia_alcohol: {
    type: String,
    required: true
  },
  problemas_sentido_vida: {
    type: String,
    required: true
  },
  motivo_problemas_vida: {
    type: String,
    required: true
  },
  apoyo_familia_problemas: {
    type: String,
    required: true
  },
  motivo_apoyo_familia: {
    type: String,
    required: true
  },
  problemas_economicos_familia: {
    type: String,
    required: true
  },
  motivo_problemas_economicos: {
    type: String,
    required: true
  }
});

// Crear el modelo 'InterviewN4' a partir del esquema
const Interviewn4 = mongoose.model('Interviewn4', interviewn4Schema);

// Exportar el modelo para poder utilizarlo en otras partes de la aplicación
module.exports = Interviewn4;
