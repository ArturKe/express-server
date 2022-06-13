const db = require('../db')
// const {validationResult} = require('express-validator')
class UserController {
  async registerUser (req,res) {
    try {
      //Validation
      // const validationErrors = validationResult(req)
      // if(!validationErrors.isEmpty()) {
      //   return res.status(400).send('Registration error!' + validationErrors)
      // }
      //Проверка на существование пользователя, проверка по логину
      const candidate = await db.query(`SELECT name from USERS where name=`)
      if (candidate) {
        return res.send('Такой пользователь уже существует')
      }
      //Хешируем пароль
      // const hashPassword = bcrypt.hashSync(password, 7)
      // const role = await db.query(`SELECT rule from RULES where rule="regularUser"`) Берем из БД нужную роль
      // Сохраняем в БД логин, роль и захешированный пароль
    } catch (error) {
      
    }
  }

  async loginUser (req,res) {
    try {
      // Достаем данные пользователя
      const {username, password} = req.body
      // Ищем пользователя с таким именем в БД
      const user = await db.query(`SELECT name from USERS where name=`, [username])
      if (!user) {
        return res.send('Такой пользователь не найден.')
      }
      // Сравниваем пароли
      // const validPassword = bcrypt.compareSync(password, userPassword)
      if (!validPassword) {
        return res.send('Пароль не верный')
      }
    } catch (error) {
      
    }

  }

  async createUser (req,res) {

  }

  async getUsers (req, res) {
    try {
      const userInfo = await db.query(`SELECT * from users`)
      res.send(userInfo.rows)
    } catch (error) {
      res.status(400).send('Page not found!')
    }
  }

  async getOneUser (req,res) {
    res.send('ONE USERS HERE!' + req)
  }

  async updateUser (req,res) {
    
  }
  async deleteUser (req,res) {
    
  }
}

module.exports = new UserController