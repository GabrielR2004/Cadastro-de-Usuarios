const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// Obtendo todos os usuarios (Adicionando a rota GET)

router.get('/users' , async (req , res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (erro) {
        res.status(500).json({message: erro.message});
    }
});

// Adicionando a rota POST

router.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;