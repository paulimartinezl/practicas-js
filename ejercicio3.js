//eje 3
let actual= new Date();
let horasi=actual.getHours();
let mini=actual.getMinutes();

let aleatoriomin= (Math.floor(Math.random()*(60*5)))+(60*5);

let min=mini+aleatoriomin;
let horas=Math.trunc(horasi+(min/60));
min=min%60;

if(horas>24){
    horas=24-horas;
}

console.log("Hora actual "+horasi+":"+mini+"\n Min generados: "+aleatoriomin+"\n Hora Final: "+horas+":"+min);