var mongoose = require('mongoose');

// Create the two schemas necessary for this application
var IncidentSchema = new mongoose.Schema({
    incidentDesc: String,
    incidentDate: {type: Date, default: Date.now},
    vehicle: String,
    fromLocation: String,
    toLocation: String,
    name: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('Incident', IncidentSchema);