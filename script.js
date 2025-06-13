const chistes = [
  "¿Por qué los programadores confunden Halloween con Navidad? Porque OCT 31 = DEC 25.",
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Cuál es el café más peligroso del mundo? El ex-preso.",
  "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
  "¿Cómo se dice pañuelo en japonés? Saka-moko.",
  "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
  "¿Qué le dice una pared a otra pared? Nos vemos en la esquina.",
  "¿Cuál es el colmo de Aladdín? Tener mal genio.",
  "¿Por qué los peces no van a la escuela? Porque ya están en el mar.",
  "¿Cómo se despiden los químicos? Ácido un placer.",
];

let indiceActual = 0;

function mostrarChiste() {
  const p = document.getElementById("chiste");
  p.textContent = chistes[indiceActual];
}

function siguienteChiste() {
  indiceActual = (indiceActual + 1) % chistes.length;
  mostrarChiste();
}

function anteriorChiste() {
  indiceActual = (indiceActual - 1 + chistes.length) % chistes.length;
  mostrarChiste();
}

function mostrarSeccion(seccion) {
  document.getElementById("home").style.display =
    seccion === "home" ? "flex" : "none";
  document.getElementById("acerca").style.display =
    seccion === "acerca" ? "block" : "none";
  //   document.getElementById("nav-links").classList.remove("show");
}

// document.getElementById("menu-toggle").addEventListener("click", () => {
//   document.getElementById("nav-links").classList.toggle("show");
// });

mostrarChiste(); // mostrar el primero al cargar
