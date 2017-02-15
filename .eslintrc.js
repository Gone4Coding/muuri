module.exports = {
  "rules": {
    // Possible errors
    "no-duplicate-case": "error",
    "no-ex-assign": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    // Best practices
    "array-callback-return": "error",
    "curly": "error",
    "eqeqeq": ["error", "always"],
    "guard-for-in": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": ["error", {"allowShortCircuit": true, "allowTernary": true}],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-with": "error",
    "radix": ["error", "as-needed"],
    // Variables
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-undef-init": "error",
    "no-unused-vars": "error",
    // Stylistic issues
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": "error",
    "brace-style": ["error", "stroustrup"],
    "camelcase": "error",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2, {"SwitchCase": 1, "VariableDeclarator": 1, "FunctionDeclaration": {"body": 1, "parameters": 1}}],
    "key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "linebreak-style": ["error", "unix"],
    "new-parens": "error",
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "never"],
    "one-var-declaration-per-line": ["error", "initializations"],
    "one-var": ["error", "never"],
    "quote-props": ["error", "consistent", {"keywords": true}],
    "quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "semi": ["error", "always"],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", {"int32Hint": true}],
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always", {"exceptions": ["!"]}],
    // ES6
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "constructor-super": "error",
    "generator-star-spacing": ["error", {"before": true, "after": false}],
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-constructor": "error",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": "error",
    "yield-star-spacing": ["error", "before"]
  }
};