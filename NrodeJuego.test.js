//arrange
result=1;

//act (pedazo de codigo que vas a probrar)
nroDeJuegoAct=3;

//assert
test('que el numero actual sea mas 1 que el numero anterior',()=>{
    exepect(nroDeJuegoAct).toBe(nroDeJuegoAct+1);
    exepect(nroDeJuegoAct).toBeLessOrEqual(10);
});