// Cargar progreso o iniciar valores
let hambre = Number(localStorage.getItem("hambre")) || 50;
let sueño = Number(localStorage.getItem("sueño")) || 50;
let felicidad = Number(localStorage.getItem("felicidad")) || 50;

const hambreSpan = document.getElementById("hambre");
const sueñoSpan = document.getElementById("sueño");
const felicidadSpan = document.getElementById("felicidad");
const mensaje = document.getElementById("mensaje");
const mascotaImg = document.getElementById("mascotaImg");
const guardarBtn = document.getElementById("guardarBtn");

// Actualizar pantalla
function actualizar() {
    hambreSpan.textContent = hambre;
    sueñoSpan.textContent = sueño;
    felicidadSpan.textContent = felicidad;

    // Cambiar expresión según felicidad
    if(felicidad >= 80){
        mascotaImg.style.transform = "scale(1.1)";
    } else if(felicidad <= 20){
        mascotaImg.style.transform = "scale(0.9)";
    } else {
        mascotaImg.style.transform = "scale(1)";
    }
}

// Funciones de acciones
function alimentar(){
    hambre = Math.max(0, hambre - 20);
    felicidad = Math.min(100, felicidad + 10);
    mostrarMensaje("🍎 Has alimentado a tu mascota!");
    actualizar();
}

function dormir(){
    sueño = Math.max(0, sueño - 20);
    felicidad = Math.min(100, felicidad + 10);
    mostrarMensaje("💤 Tu mascota ha descansado!");
    actualizar();
}

function jugar(){
    felicidad = Math.min(100, felicidad + 20);
    hambre = Math.min(100, hambre + 10);
    sueño = Math.min(100, sueño + 5);
    mostrarMensaje("🎾 Jugaste con tu mascota!");
    actualizar();
}

// Mensaje temporal
function mostrarMensaje(texto){
    mensaje.textContent = texto;
    setTimeout(()=> mensaje.textContent = "", 2000);
}

// Guardar progreso
guardarBtn.addEventListener("click", ()=>{
    localStorage.setItem("hambre", hambre);
    localStorage.setItem("sueño", sueño);
    localStorage.setItem("felicidad", felicidad);
    mostrarMensaje("💾 Progreso guardado!");
});

// Disminuir felicidad, aumentar hambre y sueño con el tiempo
setInterval(()=>{
    hambre = Math.min(100, hambre + 1);
    sueño = Math.min(100, sueño + 1);
    felicidad = Math.max(0, felicidad - 1);
    actualizar();
}, 5000); // cada 5 segundos

// Inicializar
actualizar();
