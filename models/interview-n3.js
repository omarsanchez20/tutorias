const mongoose = require('mongoose');

// Definición del esquema para el nuevo modelo
const interviewn3Schema = new mongoose.Schema({
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
  reside_en_ciudad: {
    type: String,
    required: true
  },
  ciudad_residencia: {
    type: String,
    required: true
  },
  con_quien_vive: {
    type: String,
    required: true
  },
  trabaja: {
    type: String,
    required: true
  },
  lugar_trabajo: {
    type: String,
    required: true
  },
  dependientes_economicos: {
    type: Number,
    required: true
  },
  ocupacion_papa: {
    type: String,
    required: true
  },
  ocupacion_mama: {
    type: String,
    required: true
  },
  num_hermanos: {
    type: Number,
    required: true
  },
  ingreso_familiar_mensual: {
    type: Number,
    required: true
  }
});

// Crear el modelo 'InterviewN3' a partir del esquema
const Interviewn3 = mongoose.model('Interviewn3', interviewn3Schema);

// Exportar el modelo para poder utilizarlo en otras partes de la aplicación
module.exports = Interviewn3;