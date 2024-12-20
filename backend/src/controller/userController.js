const connection = require('../config/db');



async function storeUser(request, response) {
    const params = [
        request.body.nome,
        request.body.email,
        request.body.senha 
    ];

    const query = "INSERT INTO usuario_site(nome,email,senha) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        console.log(err)
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem Sucesso",
                data: results
            });
        }
    });
}

async function loginUser(request, response) {
    const { email, senha } = request.body;

    const query = "SELECT * FROM usuario_site WHERE email = ?";

    connection.query(query, [email], (err, results) => {
        if (err) {
            response.status(500).json({
                success: false,
                message: "Erro no servidor",
                error: err
            });
        } else if (results.length > 0) {
            const user = results[0];

            if (senha === user.senha) {
                response.status(200).json({
                    success: true,
                    message: "Login bem-sucedido",
                    user: {
                        id: user.id,
                        nome: user.nome,
                        email: user.email
                    }
                });
            } else {
                response.status(401).json({
                    success: false,
                    message: "Senha incorreta"
                });
            }
        } else {
            response.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }
    });
}




async function storeArquive(request, response) {
    const { titulo, resumo } = request.body;
    const arquivo = request.file.filename;

    const params = Array(
        titulo,
        resumo,
        arquivo
    );

    
    const query = "INSERT INTO pesquisa(titulo, resumo, arquivo) VALUES(?, ?, ?);";

    connection.query(query, params, (err, results) => {
        console.log(err)
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem Sucesso",
                data: err
            });
        }
    });
}

async function getArquives(request, response) {
    const query = "SELECT * FROM pesquisa";

    connection.query(query, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response.status(404).json({
                success: false,
                message: "Erro",
                sql: err
            })
        }
    })
}

module.exports = {
    storeUser,
    loginUser,
    storeArquive,
    getArquives
}
