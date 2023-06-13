(function () {
  let idCliente;

  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");

  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", actualizarCliente);

    conectarDB();

    // Obtener parametros de la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    idCliente = parametrosURL.get("id");

    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 100);
    }
  });

  function actualizarCliente(e) {
    e.preventDefault();

    if (
      nombreInput.value === "" ||
      emailInput.value === "" ||
      telefonoInput.value === "" ||
      empresaInput.value === ""
    ) {
      imprimirAlerta("Todos los campos son obligatorios", "error");

      return;
    }

    const clienteActualizado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: Number(idCliente),
    };

    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    // Encuentra el registro que debe reemplazar por su "id" que se llama igual en el KeyPath
    objectStore.put(clienteActualizado);

    transaction.onerror = function (error) {
      // tarjet.error para ver el error
      // console.log(error);
      imprimirAlerta("Hubo un error", "error");
    };

    transaction.oncomplete = function () {
      imprimirAlerta("El cliente se actualizó correctamente");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    };
  }

  function obtenerCliente(id) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    const cliente = objectStore.openCursor();

    cliente.onsuccess = function (e) {
      cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value);
        }

        cursor.continue();
      }
    };
  }

  function llenarFormulario(datos) {
    const { nombre, email, telefono, empresa } = datos;

    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
  }
})();
