//Se debe crear variables que representen los tag, es similiar al css, ejemplo:
// h1 {color: red }
// .parrafito {...}
// #pid {...}
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// CLASE 12: Escribiendo HTML desde JS
const h2 = document.querySelector('h2');
h1.innerHTML = 'Manipulacion de todo el html <br> salto de linea ';
h1.innerText = 'Interpreta solo texto';
console.log(h1.getAttribute('pantalla'));
console.log(h2.getAttribute('class'));
h2.setAttribute('class','rojo');
h2.classList.add('cafe');
h2.classList.remove('rojo');
input.value="1234567";
//Crear una elementos de html desde cero
console.log(document.createElement('img'));
console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src','https://purina.cl/sites/default/files/2022-10/purina-brand-que-sabes-de-los-perros-poodle.jpg');
pid.innerHTML = "";
pid.append(img);

