//*****Formulario-Contacto-Masterclass ---> to Monday*** */

// este evento escucha el boton (submit)
document.addEventListener("submit", (event) => {
  // evita que se recargue la pagina en caso de que no tenga nada...
  event.preventDefault(); 
  const form = document.querySelector(".form");
  const data = new FormData(form);

  const date = new Date();
  // estas dos variavles les dan el formato a la fecha y tiempo...
  const formatDate = `${date.getFullYear()}-${("00" + (date.getMonth() + 1)).slice(-2)}-${("00" + date.getDate()).slice(-2)}`;
  const formatTime = `${("00" + date.getHours()).slice(-2)}:${("00" + date.getMinutes()).slice(-2)}:${("00" + date.getSeconds()).slice(-2)}`;

  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get("ref");

  const capitalize = (str) => {
    if(str === null){
      str = "Indefinido"
    }
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const query = `
  mutation { create_item(item_name:  "MasterClass", board_id: 3169114581,
   column_values: "{\\"date4\\" : \\"${formatDate} ${formatTime}\\",\\"texto\\" : \\"${data.get("nombreCompleto")}\\", \\"texto6\\" : \\"${data.get("telefono")}\\" , \\"texto9\\" : \\"${data.get("empresa")}\\", \\"texto0\\" : \\"${data.get("email")}\\", \\"texto93\\" : \\"${data.get("puesto")}\\" , \\"texto3\\" : \\"MasterClass Analisis de Datos para Manufactura\\", \\"texto90\\" : \\"${capitalize(ref)}\\"}")
    {
      id
    }
  }`;
  fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE2NjMxOTIwNywidWlkIjozMTA2MjMyMywiaWFkIjoiMjAyMi0wNi0yMFQwNTo0MjozOS43NTJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTk4Mjk4OCwicmduIjoidXNlMSJ9.nl1lAIUsA1nRttgiwJhycPEGEklfFQmTLUcVB-DpaT0",
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      form.reset();
      console.log("Registro Exitoso: ", res);
    })
    .finally(() => {
      window.location.href = "https://www.addevent.com/event/PV14847839";
    });
});
