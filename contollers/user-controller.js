const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// create register
exports.register = async (req, res) => {
    const { Matricula, email, password, role } = req.body;

    try {
        // Verificar si la Matricula ya está registrada
        const existingUser = await User.findOne({ Matricula });
        if (existingUser) {
            return res.status(400).json({ message: 'La Matricula ya está registrada' });
        }

        // Verificar si el rol es válido
        const validRoles = ['estudiante', 'docente', 'admin'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: 'Rol no válido. Debe ser estudiante, docente o admin.' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario con el role proporcionado
        const newUser = new User({
            Matricula,
            email: email.toLowerCase(),
            password: hashedPassword,
            role: role  // Aquí se establece el valor desde el frontend
        });

        // Guardar el nuevo usuario en la base de datos
        await newUser.save();

        // Respuesta de éxito
        res.status(201).send('Usuario registrado exitosamente');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// login 
exports.login = async (req, res) => {
    try {
        const { Matricula, password } = req.body; // Solo se recibe Matricula y password desde el frontend
        
        // Buscar usuario por Matricula
        const user = await User.findOne({ Matricula });

        // Verificar si el usuario existe y comparar la contraseña
        if (!user || !(await user.comparePassword(password))) {
            return res.status(404).json({ message: 'Matrícula o contraseña incorrectos' });
        }

        // Obtener el rol del usuario
        const role = user.role;

        // Generar token de autenticación
        const token = jwt.sign({ id: user._id, role }, "1234", { expiresIn: '1d' });

        // Establecer la cookie del token (opcional)
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict'
        });

        // Responder con la información del usuario y su rol
        res.status(200).json({
            id_user: user._id,
            Matricula: user.Matricula,
            role: role
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// logout alv
// Ruta de logout
exports.logout = async (req, res) => {
    try {
        // Limpiar la cookie de token
        res.clearCookie('token');

        // Respuesta de éxito
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
