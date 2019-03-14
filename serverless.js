const os = require('os')
const path = require('path')

// because we haven't published components yet
// the following will only work on Eslam's machine :)
const coreComponentPath = path.join(os.homedir(), 'serverless', 'v2', 'src')
const { Component } = require(coreComponentPath)

class Users extends Component {
  async default(inputs = {}) {
    console.log('Users Running')
  }
}

module.exports = Users