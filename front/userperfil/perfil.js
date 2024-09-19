document.addEventListener("DOMContentLoaded", function() {
    // Obter os dados do usuário armazenados no localStorage ou sessionStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const emailUsuario = localStorage.getItem('emailUsuario');
    console.log(nomeUsuario)
    // Verificar se os dados existem e exibi-los
    if (nomeUsuario && emailUsuario) {
        document.getElementById('nome-usuario').textContent = `Nome: ${nomeUsuario}`;
        document.getElementById('email-usuario').textContent = `Email: ${emailUsuario}`;
    }
});