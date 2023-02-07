//Eslint configuration file

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:vue-scoped-css/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    // enable additional rules
    "vue-scoped-css/require-scoped": ["off", "always"],

    "indent": ["warn", 2],
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "semi": ["warn", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/no-spaces-around-equal-signs-in-attribute": ["warn"],
    "vue/html-closing-bracket-newline": ["warn", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/mustache-interpolation-spacing": ["warn", "always"],
    "vue/html-indent": ["warn", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/attribute-hyphenation": ["warn", "always", {
      "ignore": []
    }],
    "vue/html-closing-bracket-spacing": ["warn", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }],
    "vue/singleline-html-element-content-newline": ["warn", {
      "ignoreWhenNoAttributes": false,
      "ignoreWhenEmpty": false,
      "ignores": []
    }],
    "vue/multiline-html-element-content-newline": ["warn", {
      "ignoreWhenEmpty": false,
      "ignores": [],
      "allowEmptyLines": true
    }],
    "vue/max-len": ["warn", {
      "code": 100
    }],
    "vue/this-in-template": ["warn", "never"],
    "vue/order-in-components": ["warn", {
      "order": [
        "el",
        "name",
        "key",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        ["provide", "inject"],
        "ROUTER_GUARDS",
        "layout",
        "middleware",
        "validate",
        "scrollToTop",
        "transition",
        "loading",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "emits",
        "setup",
        "asyncData",
        "data",
        "fetch",
        "head",
        "computed",
        "watch",
        "watchQuery",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }]
  }
};
