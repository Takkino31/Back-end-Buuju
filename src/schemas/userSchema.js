const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    telephone: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true }
  });
  
module.exports = userSchema;