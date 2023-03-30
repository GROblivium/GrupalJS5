var peso
var altura
var imc

peso = 80;
altura = 1.68;
imc = peso / (altura * altura);

console.log(imc);

/*document.body.innerHTML = ("VALOR IMC " + imc")*/



var prod
var iva
var valiva

prod = 120000;
iva = 0.19;
valiva = prod * iva;

console.log(valiva);
/*document.body.innerHTML = ("valor iva" + valiva)*/

var cat1
var cat2
var hipot2
var hipotenusa

cat1= 10;
cat2 = 10;
hipot2 = Math.hypot((cat1 * cat1 + cat2 * cat2))
hipotenusa = Math.pow(hipot2, 1 / 2)

console.log(hipotenusa);
/*document.body.innerHTML = hipotenusa*/ 