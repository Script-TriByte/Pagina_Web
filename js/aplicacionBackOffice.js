function revelarPreviewArticulos(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGNegro.png)");
    $("#iconoListadoUsuarios").attr("src", "/img/iconoArticuloHover.png");
    $("#botonListaAlmacenes").css("opacity", "50%");
    $("#botonListaVehiculos").css("opacity", "50%");
}

function revelarPreviewPaquetes(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGNegro.png)");
    $("#iconoListadoAlmacenes").attr("src", "/img/iconoPaqueteHover.png");
    $("#botonListaUsuarios").css("opacity", "50%");
    $("#botonListaVehiculos").css("opacity", "50%");
}

function revelarPreviewLotes(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGNegro.png)");
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
    revelarPreviewArticulos();
});

$("#botonListaUsuarios").mouseout(function() {
    restaurarBody();
});

$("#botonListaAlmacenes").mouseover("mouseover", function() {
    revelarPreviewPaquetes();
});

$("#botonListaAlmacenes").mouseout(function() {
    restaurarBody();
});

$("#botonListaVehiculos").mouseover(function() {
    revelarPreviewLotes();
});

$("#botonListaVehiculos").mouseout(function() {
    restaurarBody();
});