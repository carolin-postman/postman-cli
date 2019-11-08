const path = require('path')
const log = require('./log')

try {
  module.exports = require(path.resolve(process.cwd(), '.postman'))
} catch (e) {
  log.error('No .postman.json file found! Run postman setup.')
  process.exit(1)
}
