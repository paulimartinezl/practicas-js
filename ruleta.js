
for (k=1; k<11; k++){
    v=Math.floor(Math.random()*(11-5)+5); 
    rand = Math.floor(Math.random()*(37-0)+0);
    n=v*rand;
    res=n%36;

    console.log("Num de Juegos:",k);
    console.log("Valor aleatorio:",Math.floor(n));
    console.log("Num que salio en la ruleta:",Math.floor(res));
    console.log("----------------");
}