module.exports = {
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaVersion': 2017,
    'requireConfigFile': false
  },
  'env': {
    'es6': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'plugin:jsdoc/recommended',
    'tjw-base',
    'tjw-jest'
  ],
  'plugins': [
    'jsdoc'
  ],
  'rules': {
    'jsdoc/check-access': 1,
    'jsdoc/check-alignment': 1,
    'jsdoc/check-examples': 1,
    'jsdoc/check-indentation': 0,
    'jsdoc/check-line-alignment': [
      1,
      'always',
      {
        'tags': [
          'param',
          'arg',
          'argument',
          'property',
          'prop',
          'returns',
          'return'
        ],
        'customSpacings': {
          'postDelimiter': 1,
          'postTag': 1,
          'postType': 1,
          'postName': 2
        }
      }
    ],
    'jsdoc/check-param-names': 1,
    'jsdoc/check-property-names': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/check-values': 1,
    'jsdoc/empty-tags': 1,
    'jsdoc/implements-on-classes': 1,
    'jsdoc/match-description': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-bad-blocks': 1,
    'jsdoc/no-defaults': 1,
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 1,
    'jsdoc/require-file-overview': 1,
    'jsdoc/require-hyphen-before-param-description': 0,
    'jsdoc/require-jsdoc': [
      1,
      {
        'publicOnly': {
          'ancestorsOnly': false,
          'cjs': true,
          'esm': true,
          'window': true
        },
        'require': {
          'ArrowFunctionExpression': true,
          'ClassDeclaration': true,
          'ClassExpression': true,
          'FunctionDeclaration': true,
          'FunctionExpression': true,
          'MethodDefinition': true
        }
      }
    ],
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-property': 1,
    'jsdoc/require-property-description': 1,
    'jsdoc/require-property-name': 1,
    'jsdoc/require-property-type': 1,
    'jsdoc/require-returns': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/tag-lines': [
      1,
      'always',
      {
        'count': 0,
        'noEndLines': true,
        'tags': {
          'example': {
            'count': 1,
            'lines': 'always'
          }
        }
      }
    ],
    'jsdoc/valid-types': 1
  },
  'settings': {
    'jsdoc': {
      'tagNamePreference': {
        'returns': 'return'
      }
    }
  }
};
