let loginButton = document.getElementById("login");

loginButton.onclick = async function () {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let dados = { email, senha };
    console.log(dados);

    const response = await fetch("http://localhost:3006/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dados)
    });

    const results = await response.json();
    console.log(results);

    if (results.success) {
        alert("Login bem-sucedido");
        localStorage.setItem('emailUsuario', results.user.email);
        localStorage.setItem('nomeUsuario', results.user.nome);
        window.location.href = "../primeirapág/primeirapag.html";
    } else {
        alert("Falha no login: " + results.message);
    }
}