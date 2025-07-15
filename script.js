fetch("http://localhost:5000/")
  .then(response => response.text())
  .then(data => {
    const div = document.createElement("div");
    div.innerText = data;
    document.body.appendChild(div);
  })
  .catch(error => {
    console.error("Erro ao conectar com o backend:", error);
  });