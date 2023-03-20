const producto = "Monitor de 20 pulgadas";
//Conocer tamaño de cadena
console.log("Tu tweet tiene " + producto.length + " caracteres");

//Encontrar palabra en texto
//Te muestra si encuentra una cadena dentro de otra y en que posicion la encontró (La posicion de la primera letra). Si no la encuentra regresa un -1
console.log("La palabra 'pulgadas' se encontro en la posicion: " + producto.indexOf("pulgadas") + " de la cadena");

//.includes te regresa true o false si encontro o no la cadena dentro de la otra
if (producto.includes("pulgadas")) {
  console.log("La palabra se encontro");
} else {
  console.log("La palabra no se encontro");
}