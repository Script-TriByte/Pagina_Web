function revelarPreviewContenido(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGContenido.png)");
    $("#iconoListadoContenido").attr("src", "/img/iconoCamion.png");
    $("#botonListaDestino").css("opacity", "50%");
}

function revelarPreviewDestino(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGSeguimiento.png)");
    $("#iconoListadoDestino").attr("src", "/img/iconoSeguimiento.png");
    $("#botonListaContenido").css("opacity", "50%");
}

function restaurarBody(){
    $(".contenedorAccesoAListas").css("background-image", "url(/img/BGCamiones.png)");

    $("#iconoListadoContenido").attr("src", "/img/iconoCamion.png");
    $("#botonListaContenido").css("opacity", "100%");
    
    $("#iconoListadoDestino").attr("src", "/img/iconoSeguimiento.png");
    $("#botonListaDestino").css("opacity", "100%");

}

$("#botonListaContenido").mouseover(function() {
    revelarPreviewContenido();
});

$("#botonListaContenido").mouseout(function() {
    restaurarBody();
});

$("#botonListaDestino").mouseover("mouseover", function() {
    revelarPreviewDestino();
});

$("#botonListaDestino").mouseout(function() {
    restaurarBody();
});