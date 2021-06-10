var fecha = new Date();
var dd = String(fecha.getDate()).padStart(2, '0');
var mm = String(fecha.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = fecha.getFullYear();

fecha = yyyy + '/' + mm + '/' + dd;

module.exports = fecha