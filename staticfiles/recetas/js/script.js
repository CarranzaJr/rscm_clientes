// Cambiar el header cuando el usuario haga scroll

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60);
});

/*
// Mostrar mensaje de alerta cuando haga clic en el boton

document.querySelector('.btn').addEventListener('click', function(){
    alert('¡Tu evento ha sido realizado!');
});

// Aplicar a todos los botones de clase .btn

document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click', function(){
        alert("¡Tu evento ha sido registrado")
    })
});*/

// Función para el primer el boton
document.getElementById("btn-recetas").addEventListener('click', function(){
    alert("Planificacion realizada")
});

// Función para el segundo el boton
document.getElementById("btn-promocion").addEventListener('click', function(){
    alert("Aprovechaste la promocion")
});

// Seleccionar todos los enlaces dentro de la clase .navbar
document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault(); // Prevenir comportamiento por defecto del enlace
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'instant'
        });
    });
});


// Cambiar la imagen de fondo caada n segundos
const imagenes = [
    'static/recetas/img/burguer.jpg',
    'static/recetas/img/fondo.jpg',
];
const homeSection = document.querySelector('.home');
const intervalo = 5000; // 5000 ms = 5 s
let indiceImagen = 0;
function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,
                                rgba(236, 131, 222, 0.6),
                                rgba(202, 132, 211, 0.3)
    ), url(${imagenes[indiceImagen]}) `;
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}
setInterval(cambiarFondo, intervalo);

// Mostrar menú en pantallas pequeñas
let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');
let enlaces = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('bx-x');
};

enlaces.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('open');
        menu.classList.remove('bx-x');
    }
});

// animacion de texto
var typed = new Typed('#typed',{
    strings: ['la especial de cheft', 'sabor al zason', 'preparala a cualquier hora'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar: "_",
    backSpeed: 20,

}

)
var typed2 = new Typed('#typed2',{
    strings: ['Aprovecha la receta', 'La mejor receta', 'preparala a cualquier hora'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar: "_",
    backSpeed: 20,

}

)