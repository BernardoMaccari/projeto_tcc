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

 document.addEventListener("DOMContentLoaded", async () => {
   const response = await fetch("http://localhost:3006/api/pesquisa");
   const result = await response.json();

  //  console.log(result.data);


  if(result.success) {
      const artigosBlocos = document.querySelector('.noticia_artigo_kids');

      result.data.forEach(artigos => {
        // console.log(artigos)
      
      const linhaDiv = document.createElement('div');
      linhaDiv.className = 'linha';

      const colDiv = document.createElement('div');
      colDiv.className = 'col';

      
      const tituloLink = document.createElement('a');
      tituloLink.href = '#';
      tituloLink.className = 'titulos';
      tituloLink.textContent = artigos.titulo;

      
      const textoDiv = document.createElement('div');
      textoDiv.className = 'texto';

      const textoH4 = document.createElement('h4');
      textoH4.textContent = artigos.resumo;

      
      const arquivoLink = document.createElement('a');
      arquivoLink.href = `/uploads/${artigos.arquivo}`; 
      arquivoLink.textContent = 'Mostrar arquivo';
      console.log(arquivoLink);

      colDiv.appendChild(tituloLink);
      colDiv.appendChild(arquivoLink);

      textoDiv.appendChild(textoH4);

      linhaDiv.appendChild(colDiv);
      linhaDiv.appendChild(textoDiv);

      artigosBlocos.appendChild(linhaDiv);
    })
    
    } else {
      console.log("ERRO", result.sql);
    }
});

