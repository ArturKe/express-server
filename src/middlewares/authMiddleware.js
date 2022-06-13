// const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === "ORTIONS") {
    next()
  }
  try {
    //Bearer
    const token = req.headers.authorization.split[1]
    if (!token) {
      return res.status(403).send('Пользователь не  авторизован!')
    }
    const decodeData = jwt.verify(token, secret)
    req.user = decodeData
    next()
  } catch (e) {
    comnsole.log(e)
    return res.status(403).send('Пользователь не  авторизован!')
    
  }
}