import Parser from './parser/parser.js'
import json2xml from 'json2xml'
import { DOMParser } from 'xmldom'
import xpath from 'xpath'

class Astx {
  constructor (src, query) {
    this.src = src
    this.query = query
  }

  parse (code) {
    const parser = new Parser()
    const result = parser.parse(code)
    return result.body
  }

  convertToXML (parsedJSON) {
    const result = json2xml(parsedJSON)
    return result
  }

  queryCode (query, xml) {
    const doc = new DOMParser()
    // is this safe? it's 1am Y-O-L-O
    const parsedXML = doc.parseFromString(xml)

    // query it using xpath
    const result = xpath.select(query, parsedXML)
    return result
  }

  search (query, code) {
    this.src = code
    const parsedCode = this.parse(code)
    const xml = this.convertToXML(parsedCode)
    const queryResult = this.queryCode(query, xml)
    return this.formatResult(queryResult)
  }

  formatResult (queryResult) {
    let output = []
    const code = this.src

    queryResult.forEach(result => {
      const lineNumber = result.firstChild.lineNumber
      const codeResult = code.split('\n')[lineNumber - 1]

      output.push({
        lineNumber: lineNumber,
        code: codeResult
      })
    })

    return output
  }
}

module.exports = Astx
