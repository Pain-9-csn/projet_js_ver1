   //Dom
//  Recuperation des champs du formulaire
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");   
const comment = document.getElementById("comment"); //  Recuperation de la balise pour les commentaires  
const result = document.getElementById("result");  //  Recuperation de l'ecran d'affichage 
const btn = document.getElementById("btn"); //  Recuperation du bouton
btn.disabled =true; // Initialisation de la desactivation du bouton
// Recuperation de la liste d'affichage
const add = result.children[0];
const moins = result.children[1];
const fois = result.children[2];
const divide = result.children[3];

//fonctions
//  Fonction pour verifier  si l'entree est numerique
function isNumeric (x){
   return x !== "" && !isNaN(x);
}
//  Fonction pour verifier  si l'entree est vide
function isDra (x) {
    return x != "";
}
//  Fonction pour controler la saisie
function controller (x){
    const t = num1.value;
    const y = num2.value;
    if (!isNumeric(t) || !isNumeric(y)) {
        comment.textContent = "! Veuillez saisir une valeur numérique";
    } else {
        comment.textContent = "";
    }
}
//  Fonction permettant d'activer ou de desactiver le button par rapport a la validite des champs
function validForm(){
    btn.disabled = !(isDra(num1.value) && isDra(num2.value) && isNumeric(num1.value) && isNumeric(num2.value));
}
//  Fonction permettant d'effacer l'affichage precedente a chaque nouvelle saisie
function fomp() {
    add.textContent = "";
    moins.textContent = "";
    fois.textContent = "";
    divide.textContent = "";
}
//  Les fonctions pour les calculs arithmetiques
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
        return (x / y).toFixed(3);
    else 
        return null
}
//  Fonction pour l'appel des fonctions arithmetiques et pour l'affichage 
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
        divide.textContent = " Division par 0 impossible ";
    }
}
//Events
//  fonction pour ecouter et agir sur les champs
num1.addEventListener('input', function (e) {
     controller(e.target.value);
     validForm();
     fomp();
});
num2.addEventListener('input', function (e) {
     controller(e.target.value);
     validForm();
     fomp();
});