
let dataNat = new Date("2024-08-15");
function calculaTempo(){
    let dataAtual = new Date();
    let tempo = dataNat - dataAtual;
    var totalSegundos = Math.floor(tempo/1000);
    var horas = Math.floor(totalSegundos/3600);
    totalSegundos %= 3600;
    var minutos = Math.floor(totalSegundos/60);
    var segundos = totalSegundos % 60;
    
    var dias =Math.floor(horas/24);
    horas %= 24;
    var meses = Math.floor(dias/30); 
    dias %= 30;
    
    console.log(`${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`)
}

setInterval(() => {calculaTempo()}, 1000);