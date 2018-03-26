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
    return result;
  }

  search (query, code) {
    const parsedCode = this.parse(code)
    const xml = this.convertToXML(parsedCode)
    const queryResult = this.queryCode(query, xml)
    return queryResult
    // return this.formatResult(queryResult)
  }

  formatResult (queryResult) {
  }
}

module.exports = Astx