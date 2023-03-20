const producto = "Monitor de 20 pulgadas";

//texto es una cadena que repite ' Promocion' 3 veces, por lo cual seria: ' Promocion Promocion Promocion'
//Si colocas un numero decimal se redondea hacia abajo, 2.3 = 2, 2.999999 = 2
const texto = ' Promocion'.repeat(3);
console.log(`${producto} ${texto}`);

//Split. Separa strings cuando encuentre lo que coloques
const actividad = "Separacion de split";
console.log(actividad.split(" ")); // Cuando encuentre espacios