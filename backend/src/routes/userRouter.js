const router = require('express').Router();
const { storeUser, loginUser, storeArquive} = require('../controller/userController');
const upload = require('../multer');

router.post('/register', storeUser);
router.post('/login', loginUser); // Nova rota para login
router.post('/upload/arquivo', storeArquive, upload.single('file'));

module.exports = router;
