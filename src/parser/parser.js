import { parseScript } from 'cherow'

class Parser {
  parse (code, opts = {}) {
    const defaultOptions = {
      loc: true
    }

    const options = opts || defaultOptions

    return parseScript(code, options)
  }
}

module.exports = Parser
