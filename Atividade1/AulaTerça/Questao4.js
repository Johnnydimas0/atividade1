lado1=prompt("Digite primeiro lado? ")
lado2=prompt("Digite segundo lado? ")
lado3=prompt("Digite terceiro lado? ")

if (lado1 === lado2 && lado2 === lado3) {
    alert( "Triângulo equilátero"); // Todos os lados iguais
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert ("Triângulo isósceles"); // Dois lados iguais
} else {
    alert( "Triângulo escaleno"); // Todos os lados diferentes
}