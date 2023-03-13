"use strict";
exports.__esModule = true;
exports.Equipo = void 0;
var Equipo = /** @class */ (function () {
    function Equipo(id, description, fechaFabricacion, fechaInstalacion) {
        this.id = id;
        this.description = description;
        this.fechaFabricacion = fechaFabricacion;
        this.fechaInstalacion = fechaInstalacion;
    }
    return Equipo;
}());
exports.Equipo = Equipo;
function agregar_Equipo(equipo, array) {
    if (array.push(equipo)) {
        console.log('Se ha añadido ', equipo, ' a la base de datos', array);
    }
    else {
        console.log('El Equipo', equipo, ' No se ha podido añadir');
    }
    function leer_Equipo() {
    }
    function eliminar_Equipo() {
    }
    function editar_Equipo() {
    }
}
