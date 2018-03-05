import { parseScript } from 'cherow'
import { json2xml } from 'xml-js'
import { DOMParser } from 'xmldom'
import xpath from 'xpath'

class Mental {
  constructor (src, query) {
    this.src = src
    this.query = query
  }

  parse (code) {
    const result = parseScript(code)
    return result.body
  }

  convertToXML (parsedJSON) {
    return json2xml(parsedJSON)
  }

  queryCode (query, xml) {
    console.log(xml)
    // parse the xml
    const doc = new DOMParser()
    // is this safe? it's 1am Y-O-L-O
    const parsedXML = doc.parseFromString(xml)

    // query it using xpath
    return xpath.select(query, xml)
  }

  search (code, query) {
    const parsedCode = this.parse(code)
    const xml = this.convertToXML(parsedCode)
    const queryResult = this.queryCode(query, xml)
    return queryResult
    // return this.formatResult(queryResult)
  }

  formatResult (queryResult) {
  }
}

module.exports = Mental
