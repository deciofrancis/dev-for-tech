 // var - pode ser usada em escopo global
var testeVariavelVar = 30;
 
function testeVariaves () {

    if (true) {
        var x = 5;
    }
    console.log(x);  // 5

    // let - utilizada como variavel local em escopo de bloco
    if (true) {
        let testeLet = 5;
    }
    
   
    // const - uma constante de escopo de bloco, utilizada para leitura
    const PI = 3.14;
}

console.log(testeLet);  // ReferenceError: testeLet não está definido