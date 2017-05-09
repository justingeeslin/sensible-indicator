window.sensible = typeof sensible !== "undefined" ? sensible : {};
sensible.classes = typeof sensible.classes !== "undefined" ? sensible.classes : {};

sensible.classes.SweetIndicator = require('./js/sensibleSweetIndicator.js');

module.exports = sensible.classes.SweetIndicator;
