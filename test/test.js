import test from 'ava'
import Astx from '../src/index.js'

test.beforeEach(t => {
  t.context.astx = new Astx()
})

test('it finds usages of eval', t => {
  // arrange
  const javascript = `const x = 1; eval(x);`

  const query = '//name[.="eval"]'

  // act
  const output = t.context.astx.search(query, javascript)

  // expected
  const expectedObject = {
    lineNumber: 1,
    code: javascript
  }

  let expected = []
  expected.push(expectedObject)

  // assert
  t.deepEqual(output, expected)
})
