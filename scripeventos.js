//Se debe crear variables que representen los tag, es similiar al css, ejemplo:
// h1 {color: red }
// .select {...}
// #id {...}
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#numero1Id');
const input2 = document.querySelector('#numero2Id');
const btn = document.querySelector('#btnCalcularId');
const p = document.querySelector('#resultadoId');

function btnOnClick() {
    
    p.innerText = "La suma es: " + (Number.parseInt(input1.value) + Number.parseInt(input2.value));
}