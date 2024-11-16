//Carousel:
const myCarouselElement = document.querySelector("#carouselExampleIndicators");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
  keyboard: false,  
  ride: true,
});

//Tooltip:
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Evento: 
$("#enviarCorreo").click(function () {
  alert("El correo fue enviado correctamente...");
});

// Selectores de etiqueta:
$(document).ready(function () {
  $("h4").dblclick(function () {
    $(this).css({
      color: "red",
    });
  });
});

// Selectores de clase: - efecto toggle - hacer aparecer y desaparecer contenido card menos los titulos- Agregué clase card-clic a etiqueta h5 y clase card-efecto a etiqueta p e img
$(".card-clic").on("click", function () {
  $(".card-efecto").toggle("slow");
});