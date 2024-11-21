document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3006/api/pesquisa");
    const result = await response.json();
 
   //  console.log(result.data);
 
 
   if(result.success) {
       const artigosBlocos = document.querySelector('.container');
 
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
       arquivoLink.href = `/backend/src/uploads/${artigos.arquivo}`; 
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