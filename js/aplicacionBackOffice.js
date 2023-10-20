function revelarPreviewUsuarios(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGUsuarios.png)");
    $("#iconoListadoUsuarios").attr("src", "/img/iconoArticuloHover.png");
    $("#botonListaAlmacenes").css("opacity", "50%");
    $("#botonListaVehiculos").css("opacity", "50%");
}

function revelarPreviewAlmacenes(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGAlmacenes.png)");
    $("#iconoListadoAlmacenes").attr("src", "/img/iconoPaqueteHover.png");
    $("#botonListaUsuarios").css("opacity", "50%");
    $("#botonListaVehiculos").css("opacity", "50%");
}

function revelarPreviewVehiculos(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGVehiculos.png)");
    $("#iconoListaVehiculos").attr("src", "/img/iconoLoteHover.png");
    $("#botonListaUsuarios").css("opacity", "50%");
    $("#botonListaAlmacenes").css("opacity", "50%");
}

function restaurarBody(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGBackOffice.png)");

    $("#iconoListadoUsuarios").attr("src", "/img/iconoArticulo.png");
    $("#botonListaUsuarios").css("opacity", "100%");
    
    $("#iconoListadoAlmacenes").attr("src", "/img/iconoPaquete.png");
    $("#botonListaAlmacenes").css("opacity", "100%");

    $("#iconoListadoVehiculos").attr("src", "/img/iconoLote.png");
    $("#botonListaVehiculos").css("opacity", "100%");
}

$("#botonListaUsuarios").mouseover(function() {
    revelarPreviewUsuarios();
});

$("#botonListaUsuarios").mouseout(function() {
    restaurarBody();
});

$("#botonListaAlmacenes").mouseover("mouseover", function() {
    revelarPreviewAlmacenes();
});

$("#botonListaAlmacenes").mouseout(function() {
    restaurarBody();
});

$("#botonListaVehiculos").mouseover(function() {
    revelarPreviewVehiculos();
});

$("#botonListaVehiculos").mouseout(function() {
    restaurarBody();
});