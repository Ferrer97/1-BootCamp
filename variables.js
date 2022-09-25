// Formas de definir variables //

// Let y var pueden cambiar su valores no necesitan estar inicializadas
var variables;
let variablesLet;

// Las contantes no puede cambiar de valor y necesitan estar inicializadas
const constante = 21;

/* diferencia entre let y var es el scope, var tiene el scope global y let tiene un scope local */
var a = 1;
console.log(a)

let b = 2;
console.log(b)

const resultado = a + b;
console.log(resultado)