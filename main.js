let h1 = document.querySelector('h1');
let form = document.querySelector('#form');
let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let pResult = document.querySelector('#result')

form.addEventListener('submit', sumarImputValues);

//Podremos usar click solo si el boton lo cambiamos a tipo button
//btn.addEventListener('click', sumarImputValues);

function sumarImputValues(event){
    console.log(event);
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value)
    pResult.innerHTML = "Resultado de la suma: " + sumaInputs;
    
}


input1.addEventListener('focus', (event) => {
    event.target.style.border='2px solid rgb(87, 204, 189)'
})

input2.addEventListener('focus', (event) => {
    event.target.style.border='2px solid rgb(87, 204, 189)'
})


/* function enfocar(){
    input1.classList.add('intGreen');
}

function enfocar2(){
    input2.classList.add('intGreen');
}

function desenfocar(){
    input1.classList.remove('intGreen');
}

function desenfocar2(){
    input2.classList.remove('intGreen');
}


input1.addEventListener('DOMFocusOut', desenfocar);
input1.addEventListener('DOMFocusIn', enfocar);
input2.addEventListener('DOMFocusOut', desenfocar2);
input2.addEventListener('DOMFocusIn', enfocar2); */


