const router = require('express').Router();
const { storeUser, loginUser, storeArquive} = require('../controller/userController');
const upload = require('../multer');

/**
 * @swagger
 * /api/registro:
 *  post:
 *    summary: Registra o login do usuario
 *    responses:
 *      200:
 *        description: Pega as  informações do usuario e manda para o banco de dados, ao ele se cadastrar no site
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/register', storeUser);

/**
 * @swagger
 * /api/login:
 *  post:
 *    summary: Devolve informações do usuario
 *    responses:
 *      200:
 *        description: Pega informações do usuario do banco de dados e confirma no login
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/login', loginUser); // Nova rota para login

/**
 * @swagger
 * /api/upload:
 *  post:
 *    summary: Mandar arquivo para o banco de dados
 *    responses:
 *      200:
 *        description: Serve para mandar o arquivo postado pelo usuario para o banco de dados
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/upload/arquivo', upload.single('file'), storeArquive);

module.exports = router;
