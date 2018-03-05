import test from 'ava'
import Mental from '../src/mental.js'

test.beforeEach(t => {
  t.context.m = new Mental()
})

test('it finds usages of eval', t => {

  //arrange
  const javascript = `
    const x = '1+1';
    eval(x);
    let y = 222;
  `
  
  const query = '//eval';

  //act 
  const output = t.context.m.search(javascript, query)
  
  //expected
  const expected = { 
    lineNumber: 2
    code: 'eval(x)'
  }

  //assert
  t.is(output, expected)
})