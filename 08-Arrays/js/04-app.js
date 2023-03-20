const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//Aunque un objeto o un arreglo esten declarados en const, se le pueden modificar los valores que estan dentro de ellos, asi como agregar mas
meses[1] = 'Segundo mes';
meses[5] = 'Nuevo mes';

//En JavaScript si agregas un dato en una posicion de un arreglo que se salta posiciones inexistentes, se salta dichas posiciones que no existen
meses[11] = 'Ultimo mes';

meses.push('Mes push'); //A pesar de que las posiciones 6-10 estan disponibles, push agrega un valor hasta la ultima posicion posible, por lo que este valor se agrega en la posicion 12, despues del valor de 'Ultimo mes'

console.table(meses);