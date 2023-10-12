let nome="Douglas" //Nome do herói.
let quantidadeExp=0 // Quantidade de EXP inicial.
let quantidadeMonstrosDerrotados=0 // Difinir a quantidade de monstros que foram derrotados.

console.log("Total de monstros derrotados: ", quantidadeMonstrosDerrotados)
console.log("Para cada monstro derrotado, você recebe 1.365 XP")

// Através do laço de repetição, haverá o aumento da EXP em 1365 para cada monstro derrotado.
for(let contador=0;contador<quantidadeMonstrosDerrotados;contador++){
    quantidadeExp+=1365
}

console.log("Você recebeu ao todo", quantidadeExp, "pontos de EXP") // Monstra o total da EXP recebida.

// Através da estrutura de desição, será exibido o nome do herói e o seu classificador de nível.
if(quantidadeExp<=1000){
    console.log("O Herói de nome", nome, "está no nível de Prata")
}else if(quantidadeExp>1000&&quantidadeExp<=2000){
    console.log("O Herói de nome", nome, "está no nível de Bronze")
}else if(quantidadeExp>2000&&quantidadeExp<=5000){
    console.log("O Herói de nome", nome, "está no nível de Prata")
}else if(quantidadeExp>5000&&quantidadeExp<=7000){
    console.log("O Herói de nome", nome, "está no nível de Ouro")
}else if(quantidadeExp>7000&&quantidadeExp<=8000){
    console.log("O Herói de nome", nome, "está no nível de Platina")
}else if(quantidadeExp>8000&&quantidadeExp<=9000){
    console.log("O Herói de nome", nome, "está no nível de Ascendente")
}else if(quantidadeExp>9000&&quantidadeExp<=10000){
    console.log("O Herói de nome", nome, "está no nível de Imortal")
}else if(quantidadeExp>10000){
    console.log("O Herói de nome", nome, "está no nível de Radiante")
}