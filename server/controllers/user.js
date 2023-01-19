const { User } = require('../util/models')
const bcrypt = require('bcryptjs')


module.exports = {
  register: async (req, res) => {
    try {
      const {username, password} = req.body
      const checkUser = await User.findOne({
        where: {username}
      })
      if(checkUser) {
        return res.status(200).send('Username is already in use.')
      }
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      const newUser = await User.create({
        username: username,
        password: hash,
        admin: false,
      })
    }
    catch (err) {
      res.status(200).send(err)
    }
  },

  
  login: async (req, res) => {
    const {username, password} = req.body
    const checkUser = await User.findOne({
      where: {username}
    })
    if(checkUser) {
      let authenticated = bcrypt.compareSync(password, checkUser.password)
      if(authenticated) {
        return res.status(200).send(checkUser)
      }
      return res.status(200).send('Password is incorrect')
    }
    return res.status(200).send('Username does not exist')
  }
}

  