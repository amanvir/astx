import chreow from 'cherow'

class Mental {
  constructor (src) {
    this.src = src
    this.query = query
  }

  parse (code) {
    const result = cherow.parseScript(code)
    return result.body
  }

  convertToXML (parsedJSON) {
  }

  query (xml, query) {
  }

  search (code, query) {
    const parsedCode = this.parse(code)
    const xml = this.converToXML(parsedCode)
    const queryResult = this.query(xml, query)
    return this.formatResult(queryResult)
  }

  formatResult (queryResult) {
  }
}

module.exports = Mental
