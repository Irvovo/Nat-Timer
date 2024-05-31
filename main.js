
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth();
let diaAtual = dataAtual.getDate();
let dataNat = new Date("2024-08-15");
let mesNat = dataNat.getMonth();
let diaNat = dataNat.getDate();

function atualizaTela(){
    if(mesNat - mesAtual > 1){
    document.querySelector(".meses").innerText = `${mesNat - mesAtual} meses e`
    } else {
        document.querySelector(".meses").innerText = `${mesNat - mesAtual} mes e`
    }

    if(diaAtual < diaNat){
        document.querySelector(".dias").innerText = `${diaNat - diaAtual} dias`
    } else {document.querySelector(".dias").innerText = `${diaAtual - diaNat} dias`}
}
atualizaTela();