import { parseScript } from 'cherow'

class Parser {
  parse (code) {
    return parseScript(code)
  }
}

module.exports = Parser