import { urlBackoffice } from "../js/configuracion.js";

let aplicacionActual = "Almacen";

const flechaIzquierda = document.getElementById("izquierda");
const flechaDerecha = document.getElementById("derecha");

if (aplicacionActual === "Almacen"){
  revelarAplicacionAlmacen();
}

function revelarAplicacionAlmacen(){
  $("#nombreAplicacion").html("APLICACIÓN DE GESTIÓN <br> DE ALMACENES");
  $("#informacionApp").html("Gestione los artículos de su almacén, así como los paquetes y lotes con los que trabajar.");
  document.body.style.backgroundImage = "url(/img/BGAlmacen.png)";
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appAlmacenes.html");

  ocultarFlechaIzquierda();
  mostrarFlechaDerecha();
  accesoAplicacionCamiones(flechaDerecha);
}

function revelarAplicacionCamiones(){
  $("#nombreAplicacion").html("APLICACIÓN DE GESTIÓN <br> DE CAMIONES");
  $("#informacionApp").html("Observe el contenido de su vehículo, así como sus entregas pendientes y destinos a cargar.");
  document.body.style.backgroundImage = "url(/img/BGCamiones.png)";
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appCamiones.html");

  mostrarFlechaIzquierda();
  mostrarFlechaDerecha();
  accesoAplicacionAlmacen(flechaIzquierda);
  accesoAplicacionSeguimiento(flechaDerecha);
}

function revelarAplicacionSeguimiento(){
  $("#nombreAplicacion").html("APLICACIÓN DE <br> SEGUIMIENTO");
  $("#informacionApp").html("Observe la lista de paquetes con destinos establecidos, con su respectiva información asignada.");
  document.body.style.backgroundImage = "url(/img/BGSeguimiento.png)";
  $("#accesoAplicacion").attr("href", "/html/aplicaciones/appSeguimiento.html");

  mostrarFlechaIzquierda();
  mostrarFlechaDerecha();
  accesoAplicacionCamiones(flechaIzquierda);
  accesoBackoffice(flechaDerecha);
}

function revelarBackoffice(){
  $("#nombreAplicacion").html("BACKOFFICE DE <br> ADMINISTRACIÓN");
  $("#informacionApp").html("Gestione los Usuarios del Sistema, así como todos los Almacenes y Vehículos en disposición.");
  document.body.style.backgroundImage = "url(/img/BGBackoffice.png)";
  $("#accesoAplicacion").attr("href", urlBackoffice);

  mostrarFlechaIzquierda();
  ocultarFlechaDerecha();
  accesoAplicacionSeguimiento(flechaIzquierda);
}

function ocultarFlechaIzquierda(){
  flechaIzquierda.style.display = "none";
}

function ocultarFlechaDerecha(){
  flechaDerecha.style.display = "none";
}

function mostrarFlechaIzquierda(){
  flechaIzquierda.style.display = "block";
}

function mostrarFlechaDerecha(){
  flechaDerecha.style.display = "block";
}

function accesoAplicacionAlmacen(boton){
  boton.addEventListener('click', function(){
    revelarAplicacionAlmacen();
  })
}

function accesoAplicacionSeguimiento(boton){
  boton.addEventListener('click', function(){
    revelarAplicacionSeguimiento();
  })
}

function accesoAplicacionCamiones(boton){
  boton.addEventListener('click', function(){
    revelarAplicacionCamiones();
  })
}

function accesoBackoffice(boton){
  boton.addEventListener("click", function() {
    revelarBackoffice();
  });
}

$("#appAlmacen").click(function(){
  revelarAplicacionAlmacen();
});

$("#appChoferes").click(function(){
  revelarAplicacionCamiones();
});

$("#appSeguimiento").click(function(){
  revelarAplicacionSeguimiento();
});

$("#appBackoffice").click(function(){
  revelarBackoffice();
});