// async function handleSubmit(event) {
//     event.preventDefault();

// const { fetch } = require("undici-types");

// const { application } = require("express");
// const { FormData } = require("undici-types");

//     let data = document.getElementById("file").value;

//     const frmData = new FormData();
//     console.log(frmData);

//     let response = await fetch('http://localhost:3006/upload', {
//         method: 'POST',
//         headers: {  'Content-Type': 'application/json;charset=UTF-8' },
//         body: JSON.stringify(data)
//     });

//     let content = await response.json();

//     console.log(content);

// }

// let games = document.querySelector("#games");

// games.addEventListener('click', function(){
//     window.location.href = "https://dinorunner.com/pt/";
// })

async function cadastrarArquivo(event) {
  event.preventDefault();

  const titulo = document.querySelector("#titulo").value;
  const resumo = document.querySelector("#resumo").value;
  const arquivo = document.querySelector("#arquivo").files[0];

  // console.table(titulo, resumo, arquivo.name);

  let formData = new FormData();

  formData.append("titulo", titulo);
  formData.append("resumo", resumo);
  formData.append("file", arquivo);

  const response = await fetch("http://localhost:3006/api/upload/arquivo", {
    method: "POST",
    body: formData,
  });

  const results = await response.json();

  if (results.success) {
    alert(results.message);
  } else {
    alert(results.message);
  }
}
