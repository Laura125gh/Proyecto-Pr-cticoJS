 // tamaño de la página
 // console.log("Ancho visible:", window.innerWidth, "px");
 //  console.log("Alto visible:", window.innerHeight, "px");
 window.addEventListener("resize", () => {
     console.log(`Nuevo tamaño:${window.innerWidth}
      x ${window.innerHeight}`)
 })
 // navigator
 console.log("Idioma del navegador:" + navigator.language);
 //conexión
 console.log("Estado:",navigator.onLine?"🟢Conectado" : "🔴Desconectado");
 window.addEventListener("offline", () =>
     alert("🔴Perdiste la conexión!"));
 window.addEventListener("online", () =>
     alert("🟢Conexión restablecida!"));
 // history
 function webNex() {
     history.forward();
 }
 function webBack() {
     history.back();
 }
 // Ubicación
 function obtenerUbicacion() {
     const confirmacion = confirm("¿Quieres ver tu ubicacón?")
     if (confirmacion) {
         navigator.geolocation.getCurrentPosition(function (posicion) {
             let latitud = posicion.coords.latitude;
             let longitud = posicion.coords.longitude;
             let precision = posicion.coords.accuracy;
             document.getElementById("ubicacion").innerHTML =
                 "Latitud: " + latitud + "<br>" +
                 "Longitud: " + longitud + "<br>" +
                 "Precisión: " + precision + " metros";
         });
     } else {
         alert("No fue posible obtener tu ubicación.");
     }
 }
 // Modo oscuro
 document.querySelector("#btn-oscuro").addEventListener("click", () => {
     document.body.classList.toggle("dark-mode");
 })
 // Interraccion de un elemento
 document.querySelector("#titulo").addEventListener("click", () => {
     document.querySelector("#titulo").classList.toggle("Titulocolor");
 })
 // Recargar página
 function recargarpagina() {
     location.reload();
 }
 
 // Mostras Ubición de sitio
 function mostrarinfo() {
     let url = location.href;
     let dominio = location.hostname;
     let ruta = location.pathname;
     document.querySelector("#informacion").innerHTML =
         "URL:" + url + "<br>" +
         "Dominio:" + dominio + "<br>" +
         "Ruta actual:" + ruta;
         
 }