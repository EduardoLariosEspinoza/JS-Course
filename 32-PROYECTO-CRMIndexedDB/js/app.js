(function () {
  let DB;

  const listadoClientes = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();

    if (window.indexedDB.open("crm", 1)) {
      obtenerClientes();
    }

    listadoClientes.addEventListener("click", eliminarRegistro);
  });

  function eliminarRegistro(e) {
    if (e.target.classList.contains("eliminar")) {
      // Acceder al atributo data-cliente, dataset.(lo que esta a la derecha de data-)
      const idEliminar = Number(e.target.dataset.cliente);

      swal({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        buttons: ["Cancelar", "Confirmar"],
      }).then((confirmacion) => {
        if (confirmacion) {
          // El usuario ha confirmado la acción
          // Coloca aquí el código que se ejecutará al confirmar
          //swal("Acción confirmada", "La acción se ha completado", "success");

          const transaction = DB.transaction(["crm"], "readwrite");
          const objectStore = transaction.objectStore("crm");

          objectStore.delete(idEliminar);

          transaction.oncomplete = function () {
            console.log("Eliminado...");

            e.target.parentElement.parentElement.remove();
          };

          transaction.onerror = function () {
            console.log("Hubo un error");
          };
        } else {
          // El usuario ha cancelado la acción
          // Coloca aquí el código que se ejecutará al cancelar
          swal("Acción cancelada", "La acción no se ha realizado", "error");
        }
      });
    }
  }

  function crearDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = function () {
      console.log("Hubo un error");
    };

    crearDB.onsuccess = function () {
      DB = crearDB.result;
    };

    crearDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("Columnas creadas");
    };
  }

  function obtenerClientes() {
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = function () {
      console.log("Hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;

      const objectStore = DB.transaction("crm").objectStore("crm");

      objectStore.openCursor().onsuccess = function (e) {
        // cursor es igual al registro actual en el iterador
        const cursor = e.target.result;

        if (cursor) {
          //console.log(cursor.value); // Imprime el objeto actual de la iteración
          const { nombre, email, empresa, telefono, id } = cursor.value;

          listadoClientes.innerHTML += ` <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
              <p class="text-sm leading-10 text-gray-700"> ${email} </p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700">${telefono}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
              <p class="text-gray-600">${empresa}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
              <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
              <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
          </td>
      </tr>
  `;

          cursor.continue();
        } else {
          console.log("No hay más registros");
        }
      };
    };
  }
})();
