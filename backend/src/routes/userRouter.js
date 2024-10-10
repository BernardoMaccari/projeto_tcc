const router = require('express').Router();
const { storeUser, loginUser, storeArquive} = require('../controller/userController');
const upload = require('../multer');

/**
 * @swagger
 * /api/registro:
 *  get:
 *    summary: Retorna todas as tarefas
 *    responses:
 *      200:
 *        description: Uma list de tarefas
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
 *  get:
 *    summary: Retorna todas as tarefas
 *    responses:
 *      200:
 *        description: Uma list de tarefas
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
 *  get:
 *    summary: Retorna todas as tarefas
 *    responses:
 *      200:
 *        description: Uma list de tarefas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post('/upload/arquivo', upload.single('file'), storeArquive);

module.exports = router;
