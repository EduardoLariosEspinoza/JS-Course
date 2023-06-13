let DB;

document.addEventListener("DOMContentLoaded", () => {
  crearDB();

  setTimeout(() => {
    crearCliente();
  }, 1000);
});

function crearDB() {
  // ('nombre de la base de datos', 'version')
  let crearDB = window.indexedDB.open("citas", 1);

  // Si hay un error enviarlo a la consola
  crearDB.onerror = function () {
    console.log("Hubo un error");
  };

  // Si todo esta bien, mostrar en consola y asignar la base de datos
  crearDB.onsuccess = function () {
    console.log("Base de datos creada");

    // Referencia a la base de datos
    DB = crearDB.result;
  };

  // Solo se mandara a llamar cuando se actualice la base de datos (cuando se cambie la version), en este caso solo la primera vez
  crearDB.onupgradeneeded = function (e) {
    // El resultado de crear la base de datos. La referencia a la base de datos
    db = e.target.result;

    // Definir el objectstore (crea un almacen de objetos en una base de datos), primer parametro el nombre de la base de datos, segundo las opciones
    // keypath es el indice de la base de datos
    let objectStore = db.createObjectStore("citas", {
      keyPath: "key",
      autoIncrement: true,
    });

    // Definir columnas
    // (nombre, como hacemos referencia a la columna, opciones)
    objectStore.createIndex("mascota", "mascota", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Columnas creadas");
  };
}

function crearCliente() {
  // Las transacciones son como las consultas en SQL, son necesarias para realizar acciones en la base de datos

  // Creamos una transaccion y la usamos para acceder al almacen de objetos

  // Se crea una transaccion con el nombre de la base de datos y el tipo de transaccion
  let transaction = DB.transaction(["citas"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transacción completada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la transacción");
  };

  const objectStore = transaction.objectStore("citas");

  const nuevaCita = {
    mascota: "Jose",
    email: `Correo${Math.random()}@gmail.com`,
    telefono: 372918,
  };

  // Utilizar el object store con la transaccion (que nos permite leer y escribir), para agregar la cita
  const peticion = objectStore.add(nuevaCita);

  console.log(peticion);
}
