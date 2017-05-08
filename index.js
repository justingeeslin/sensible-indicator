window.sensible = typeof sensible !== "undefined" ? sensible : {};
sensible.classes = typeof sensible.classes !== "undefined" ? sensible.classes : {};

sensible.classes.Component = require('./js/sensibleComponent.js');

module.exports = sensible.classes.Component;
