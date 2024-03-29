(function () {
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    formulario.addEventListener("submit", validarCliente);
  });

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === "" || telefono === "" || empresa === "") {
      imprimirAlerta("Todos los campos son obligatorios", "error");

      return;
    }

    // Al colocar la llave del objeto con el mismo nombre de la variable del valor, se puede omitir : valor
    const cliente = {
      // === nombre: nombre,
      nombre,
      email,
      telefono,
      empresa,
      id: Date.now(),
    };

    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    const transaction = DB.transaction(["crm"], "readwrite");

    const objectStore = transaction.objectStore("crm");

    objectStore.add(cliente);

    transaction.onerror = function () {
      imprimirAlerta("Hubo un error", "error");
    };

    transaction.oncomplete = function () {
      imprimirAlerta("El cliente se agregó correctamente");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    };
  }
})();
