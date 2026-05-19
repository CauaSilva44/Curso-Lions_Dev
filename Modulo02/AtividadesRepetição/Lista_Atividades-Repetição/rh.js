const prompt = require('prompt-sync') ();

let salarios = [2500, 3200, 4100, 5000, 6200]

salarios.forEach((salario, index) => {
    salarios[index] = salario * 1.10; 
});
console.log(salarios)