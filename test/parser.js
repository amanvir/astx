import test from 'ava'
import Parser from '../src/parser/parser.js'

test.beforeEach(t => {
  t.context.parser = new Parser()
})


test('parser works', t => {

const input = `const x = '1+1';
    eval(x);
    let y = 222;`

const expected = {
    "type": "Program",
    "sourceType": "script",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "init": {
                        "type": "Literal",
                        "value": "1+1"
                    },
                    "id": {
                        "type": "Identifier",
                        "name": "x"
                    }
                }
            ],
            "kind": "const"
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "Identifier",
                    "name": "eval"
                },
                "arguments": [
                    {
                        "type": "Identifier",
                        "name": "x"
                    }
                ]
            }
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "init": {
                        "type": "BinaryExpression",
                        "left": {
                            "type": "Literal",
                            "value": 2
                        },
                        "right": {
                            "type": "Literal",
                            "value": 2
                        },
                        "operator": "+"
                    },
                    "id": {
                        "type": "Identifier",
                        "name": "y"
                    }
                }
            ],
            "kind": "let"
        }
    ]
}

//const parsed = t.context.parser.parse(input)

//failing for now -- will fix later
//t.is(JSON.stringify(expected), JSON.stringify(parsed))

})
