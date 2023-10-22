//eje 2
let inicial=Math.floor(Math.random()*(360));
let aleatorio=(Math.floor(Math.random()*(360*5))) +(360*5)+(inicial);
let resul=aleatorio%360;
console.log("Angulo inicial: "+inicial+"\n Numero aleatorio:"+aleatorio+ "\n Angulo Final: "+resul);