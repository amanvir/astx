import test from 'ava'
import Mental from '../src/mental.js'

test.beforeEach(t => {
  t.context.cw = new Cryptowatch()
})

test('test', t => {
  t.is(2,2)
})
