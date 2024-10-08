/*exarcicio 1
function saudacao(nome) {
console.log(`ola ${nome}`);
}

let nome = ["ola claudio"]
console.log(nome[0]);
*/

/*exercicio 2

function soma (a, b ){
    return a + b
}    
    console.log(soma(2, 4));

*/
    //exercicio 3

/*function parOuImpar(numero) {
    if(numero % 2 === 0){
        return "par"
    }else{
        return "impar"
    }

}
console.log(parOuImpar(4));  //true
console.log(parOuImpar(5));  //false*/

    //exercicio 4

/*function media(num1, num2, num3){

     let soma=num1 + num2 + num3;
     let media = soma / 3;
     return media;
}

//exemplo de uso
console.log(media(4, 6, 8));
console.log(media(10, 20, 30));
*/

  //exericio 5

  /*function ehPalindromo(s) {
    // Remove espaços e transforma em minúsculas
    s = s.replace(/\s+/g, '').toLowerCase();
    // Verifica se a string é igual à sua reversa
    return s === s.split('').reverse().join('');
}

// Exemplos de uso
console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("anona")); // true
console.log(ehPalindromo("hello")); // false*/

   // exrcicio 6

   /*function contarVogais(texto) {
    // Definindo as vogais
    const vogais = 'aeiouAEIOU';
    // Inicializando o contador
    let contador = 0;

    // Percorrendo cada caractere da string
    for (let char of texto) {
        // Verificando se o caractere é uma vogal
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso
const resultado = contarVogais("Olá, como você está?");
console.log(resultado);  // Saída: 8*/

  //exercicio 7

  /*function fatorial(n) {
    // Verifica se o número é negativo
    if (n < 0) {
        return undefined; // Fatorial não é definido para números negativos
    }
    // Fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }
    // Inicializa o resultado
    let resultado = 1;
    
    // Calcula o fatorial
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

// Exemplo de uso
const numero = 5;
const resultado = fatorial(numero);
console.log(resultado);  // Saída: 120
*/
  //exercicio 8
























