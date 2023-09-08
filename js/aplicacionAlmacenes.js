function revelarPreviewArticulos(){
    document.body.style.backgroundImage = "url(/img/BGArticulos.png)";
    $("#iconoListadoArticulos").attr("src", "/img/iconoArticuloHover.png");
}

function revelarPreviewPaquetes(){
    document.body.style.backgroundImage = "url(/img/BGPaquetes.png)";
    $("#iconoListadoPaquetes").attr("src", "/img/iconoPaqueteHover.png");
}

function revelarPreviewLotes(){
    document.body.style.backgroundImage = "url(/img/BGLotes.png)";
    $("#iconoListadoLotes").attr("src", "/img/iconoLoteHover.png");
}

function restaurarBody(){
    document.body.style.backgroundImage = "url(/img/BGAlmacen.png)";

    $("#iconoListadoArticulos").attr("src", "/img/iconoArticulo.png");
    $("#iconoListadoPaquetes").attr("src", "/img/iconoPaquete.png");
    $("#iconoListadoLotes").attr("src", "/img/iconoLote.png");
}

$("#botonListaArticulos").mouseover(function() {
    revelarPreviewArticulos();
});

$("#botonListaArticulos").mouseout(function() {
    restaurarBody();
});

$("#botonListaPaquetes").mouseover("mouseover", function() {
    revelarPreviewPaquetes();
});

$("#botonListaPaquetes").mouseout(function() {
    restaurarBody();
});

$("#botonListaLotes").mouseover(function() {
    revelarPreviewLotes();
});

$("#botonListaLotes").mouseout(function() {
    restaurarBody();
});