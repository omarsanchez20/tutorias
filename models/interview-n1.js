const mongoose = require('mongoose');

// Definición del esquema de Interview
const interviewn1Schema = new mongoose.Schema({
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
  nombre: {
    type: String,
    required: true
  },
  apellido_paterno: {
    type: String,
    required: true
  },
  apellido_materno: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  grado: {
    type: String,
    required: true
  },
  grupo: {
    type: String,
    required: true
  },
  carrera: {
    type: String,
    required: true
  },
  especialidad: {
    type: String,
    required: true
  },
  turno: {
    type: String,
    required: true
  },
  direccion: {
    calle: {
      type: String,
      required: true
    },
    numero: {
      type: String,
      required: true
    },
    colonia: {
      type: String,
      required: true
    },
    ciudad: {
      type: String,
      required: true
    }
  },
  contacto: {
    celular: {
      type: String,
      required: true
    },
    telefono: {
      type: String,
      required: true
    },
    telefono_emergencia: {
      type: String,
      required: true
    }
  },
  sexo: {
    type: String,
    required: true
  },
  fotografia: {
    type: String, // Tipo String para almacenar la URL de la imagen
    
  }
});

// Crear el modelo 'Interview' a partir del esquema
const Interviewn1 = mongoose.model('Interviewn1', interviewn1Schema);

// Exportar el modelo para poder utilizarlo en otras partes de la aplicación
module.exports = Interviewn1;
