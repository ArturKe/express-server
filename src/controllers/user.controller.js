const db = require('../db')
class UserController {
  async createUser (req,res) {

  }

  async getUsers (req, res) {
    const userInfo = await db.query(`SELECT * from users`)
    res.send(userInfo.rows)
  }

  async getOneUser (req,res) {
    res.send('ALL USERS HERE!')
  }

  async updateUser (req,res) {
    
  }
  async deleteUser (req,res) {
    
  }
}

module.exports = new UserController