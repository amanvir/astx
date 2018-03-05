class Mental {
  constructor (src) {
    this.src = src
    this.query = query
  }

  parse (code) {
    // set up parser that parses the AST
  }

  convertToXML (parsedJSON) {
    // convert the result into XML
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
