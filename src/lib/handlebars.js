const helpers = {}

helpers.isActive = (valor) => {
    var volver = ""
    if ( valor > 0 ) {
        volver = "Activo"
    } else {
        volver = "Inactivo"
    }
    return volver
}

helpers.isActiveColor = (valor) => {
    var volver = ""
    if ( valor > 0 ) {
        volver = "bg-info"
    } else {
        volver = "bg-warning"
    }
    return volver
}

helpers.anularCerrar = (activo) => {
    var retornar = ""
    if ( activo > 0 ) {
        retornar = "cerrar"
    } else {
        retornar = "anular"
    }
    return retornar
}

helpers.anularCerrarText = (activo) => {
    var retornar = ""
    if ( activo > 0 ) {
        retornar = "Cerrar"
    } else {
        retornar = "Anular"
    }
    return retornar
}

helpers.isAnuladoColor = (activo) => {
    var retornar = ""
    if (activo > 0) {
        retornar = "bg-success"
    } else {
        retornar = "bg-secondary"
    }
    return retornar
}

helpers.isAnulado = (activo) => {
    var retornar = ""
    if (activo > 0) {
        retornar = "Cerrado"
    } else {
        retornar = "Anulado"
    }
    return retornar
}

module.exports = helpers