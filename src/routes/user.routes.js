const Router = require('express')
const userController = require('../controllers/user.controller')
const router = new Router
// const {check} = require('express-validator')

router.post('/api/users', [
  // check('username', 'ИМя пользователя не может быть пустым').notEmpty()
  // check('password', 'Пароль не может быть короче 4 и длиннее 10 символов').isLength({min:4, max:10})
], userController.registerUser)
router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
// router.get('/user',(req, res) => {
//     res.send('HELLO USERS JS!!!')
// })
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router