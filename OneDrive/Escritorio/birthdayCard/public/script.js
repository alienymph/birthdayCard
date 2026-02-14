// 🎈 CREAR BURBUJAS
function crearBurbujas() {
    const ocean = document.querySelector('.ocean');

    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.width = bubble.style.height = Math.random() * 40 + 10 + 'px';
        bubble.style.animationDuration = Math.random() * 5 + 5 + 's';

        ocean.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 10000);
    }, 400);
}

crearBurbujas();


// 🎉 ACTIVAR FIESTA
function celebrar() {

    // 🎵 Música
    const musica = document.getElementById("musica");
    if (musica) {
        musica.currentTime = 0;
        musica.play();
    }

    lanzarConfetti();
    lanzarCorazones();
     mostrarMensaje();

}


// 🎊 CONFETTI PERSONALIZADO
function lanzarConfetti() {

    const colores = ["#ff007f", "#8e44ff", "#ff1a1a", "#ffcc00", "#ff4dd2"];

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "12px";
        confetti.style.height = "12px";
        confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confetti.style.top = "-20px";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.zIndex = "9999";
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        confetti.style.animation = `caer ${Math.random() * 3 + 3}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}


// 💗 CORAZONES FLOTANDO
function lanzarCorazones() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💗";
        heart.style.position = "fixed";
        heart.style.fontSize = Math.random() * 30 + 30 + "px";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-50px";
        heart.style.zIndex = "9999";

        heart.style.animation = `subir ${Math.random() * 3 + 3}s ease-out forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


// 🎞 ANIMACIONES DINÁMICAS
const style = document.createElement('style');
style.innerHTML = `
@keyframes caer {
    to {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0.8;
    }
}

@keyframes subir {
    to {
        transform: translateY(-110vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

function abrirTarjeta() {

    const overlay = document.getElementById("overlay");
    const sonido = document.getElementById("bobSound");

    // Abrir cortinas
    overlay.classList.add("abierto");

    // 🎵 Reproducir sonido
    if (sonido) {
        sonido.currentTime = 0;
        sonido.volume = 1;
        sonido.play().catch(error => {
            console.log("Error al reproducir:", error);
        });
    }

    // 💥 Pequeña explosión
    setTimeout(() => {
        lanzarConfetti();
    }, 500);

    // 🎊 Fiesta completa
    setTimeout(() => {
        lanzarConfetti();
        lanzarCorazones();
    }, 1200);

    // Quitar overlay
    setTimeout(() => {
        overlay.style.display = "none";
    }, 2000);
}


/// =======================
// 🎠 CARRUSEL
// =======================

let slideActual = 0;
let slides = [];

window.addEventListener("DOMContentLoaded", () => {
    slides = document.querySelectorAll(".slide");

    setInterval(() => {
        cambiarSlide(1);
    }, 3000);
});

window.cambiarSlide = function(direccion) {

    if (slides.length === 0) return;

    slides[slideActual].classList.remove("active");

    slideActual += direccion;

    if (slideActual < 0) {
        slideActual = slides.length - 1;
    }

    if (slideActual >= slides.length) {
        slideActual = 0;
    }

    slides[slideActual].classList.add("active");
}
function mostrarMensaje() {
    const mensaje = document.getElementById("mensajeSorpresa");

    if (!mensaje) return;

    mensaje.classList.add("activo");

    setTimeout(() => {
        mensaje.classList.remove("activo");
    }, 2000);
}

