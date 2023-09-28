//Se debe crear variables que representen los tag, es similiar al css, ejemplo:
// h1 {color: red }
// .select {...}
// #id {...}
const h1 = document.querySelector('h1');

const form = document.querySelector("#formId");
const input1 = document.querySelector('#numero1Id');
const input2 = document.querySelector('#numero2Id');
const btn = document.querySelector('#btnCalcularId');
const p = document.querySelector('#resultadoId');

form.addEventListener('click',sumarInputValue);
function sumarInputValue(event)
{
    let resul = Number.parseInt(input1.value) + Number.parseInt(input2.value);
    p.innerText = "Las suma es: " + resul;
}

/*
form.addEventListener('submit',sumarInputValue);
function sumarInputValue(event)
{
    //console.log({event});
    event.preventDefault();
    let resul = Number.parseInt(input1.value) + Number.parseInt(input2.value);
    p.innerText = "Las suma es: " + resul;
}
*/

/*
//btn.addEventListener('click',btnOnClic);

function btnOnClic()
{
    let resul = Number.parseInt(input1.value) + Number.parseInt(input2.value);
    p.innerText = "Las suma es: " + resul;
}
*/
