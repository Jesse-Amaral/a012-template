/* const bool1 = false
const bool2 = true

if(bool1) {
    alert("bool1 é verdadeiro")
}else {
    alert("bool1 é falso")
}

const bool3 = true

if(bool1 === bool2) {
    alert("bool1 e bool2 são iguais")
}else if(bool2 === bool3) {
    alert("bool2 e bool3 são iguais")
}else if(bool1 === bool3){
    alert("bool1 e boll3 são iguas")
}else {
    alert("Nenhuma das variáveis são iguais")
}
 */

/* let idade = Number(prompt("Você quer tirar seu título? Qual sua idade?"))

if(idade >= 18) {
    alert("Pode emitir título eleitor, pois sua idade permiti")
}else if(idade < 18) {
    alert("Não pode emitir título eleitor, pois sua idade não permiti")
} 

if(idade >= 60 || idade >= 16 && idade <= 17) {
    alert("Voto não obrigatorio")
}
 */

/* let idade = Number(prompt("Você quer tirar seu título? Qual sua idade?"))

if(idade >= 60 || idade >= 16 && idade < 18) {
    alert("Título facultativo, o seu voto não é obrigatório")
}else if(idade >= 18) {
    alert("Pode emitir título eleitor, pois sua idade permiti")
    let vaiVotar = Number(prompt("Você vai votar? 1-Sim ou 2-Não"))
        if(vaiVotar === 1) {
            alert("Bolsonaro,Ciro ou Lula.")
        }else {
            alert("Você tera que jusrificar seu voto.")
        }
}else {
    alert("Você não tem idade mínima para emissão do título eleitor")
} */

let nota = Number(prompt("Digiti um número de 0 a 10"))


if(nota >= 5 && nota <= 10) {
    alert("Você aprovado")
}else if(nota >= 3 && nota <= 4){
    alert("Infelizmente você esta na recuperação")
}else if(nota >= 0 && nota < 3) {
    alert("Voce foi reprovado")
}else if(nota < 0 || nota > 10) {
    alert("´´ERROR´´ Adicione de 0 a 10")
}else {
    alert("Dados inválidos")
}

