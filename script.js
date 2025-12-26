   //Dom
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const comment = document.getElementById("comment");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
btn.disabled =true;
const add = result.children[0];
const moins = result.children[1];
const fois = result.children[2];
const divide = result.children[3];

//fonctions
function isNumeric (x){
   return x !== "" && !isNaN(x);
}
function isDra (x) {
    return x != "";
}
function controller (x){
    const t = num1.value;
    const y = num2.value;
    if (!isNumeric(t) || !isNumeric(y)) {
        comment.textContent = "! Veuillez saisir une valeur numérique";
    } else {
        comment.textContent = "";
    }
}

function validForm(){
    btn.disabled = !(isDra(num1.value) && isDra(num2.value) && isNumeric(num1.value) && isNumeric(num2.value));
}

function calcul(){
    const a =  som(num1.value , num2.value);
    const s =  sous(num1.value , num2.value);
    const m =  mul(num1.value , num2.value);
    const d =  div(num1.value , num2.value);

    add.textContent = num1.value + " + " + num2.value + " = " + a;
    moins.textContent = num1.value + " - " + num2.value + " = " + s;
    fois.textContent = num1.value + " x " + num2.value + " = " + m;

    if (d != null){
        divide.textContent = num1.value + " / " + num2.value + " = " + d;
    }else{
        divide.textContent = " MATH ERROR ";
    }
}

function som(x,y){
    return Number(x) + Number(y)
}
function sous(x,y){
    return x-y
}
function mul (x,y){
    return x*y
}
function div (x,y){
    if (y != 0) 
        return x / y
    else 
        return null
}

//Events
num1.addEventListener('input', function (e) {
     controller(e.target.value);
     validForm();
});
num2.addEventListener('input', function (e) {
     controller(e.target.value);
     validForm();
});