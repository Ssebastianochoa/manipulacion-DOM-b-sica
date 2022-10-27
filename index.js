const h1 = document.querySelector('h1'); 
const form = document.querySelector('.form');
const input1 = document.querySelector('#calculo1'); 
const input2 = document.querySelector('#calculo2'); 
const button = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*function btnOnCLick () {
   const suma = (Number(input1.value) +  parseInt(input2.value)); 
   //pResult.innerText = 'El resultado es: ' + suma; 
   pResult.append('El resultado es: ' + suma);
}*/
//button.addEventListener('click', btnOnCLick);

function sumarInputValues (event) {
    event.preventDefault();
    const suma = (Number(input1.value) +  parseInt(input2.value)); 
    //pResult.innerText = 'El resultado es: ' + suma; 
    pResult.append('El resultado es: ' + suma);
 }

 form.addEventListener('submit', sumarInputValues);
