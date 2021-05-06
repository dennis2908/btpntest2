const bcrypt = require('bcryptjs')

let hash = password => {
  return bcrypt.hashSync(password, 10)
}

let compare = (password, hashed) => {
  return bcrypt.compareSync(password, hashed)
}

module.exports = {hash, compare}