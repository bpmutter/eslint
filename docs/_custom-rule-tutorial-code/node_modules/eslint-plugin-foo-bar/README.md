# eslint-plugin-foo-bar

*This rule is created for educational purposes to explain how to create an ESLint custom rule and plugin.*

ESLint plugin that only allows you to assign `"bar"` to `const foo`.

For example, the rule would give an error for the following:

```javascript
const foo = "baz"; // Bad :(
```

The rule accepts the following:

```javascript
const foo = "bar"; // Good :)
```

## Tutorial

For a tutorial on how to create a custom rule in a plugin using `eslint-plugin-foo-bar` as an example, refer to the [ESlint Custom Rule & Plugin Tutorial](TODO: add link).

## Use in Your Project

Install the rule in your project:

```shell
npm install --save-dev eslint-plugin-foo-bar
```

Add the plugin and rule to your ESLint configuration file:

```js
// .eslintrc.js

module.exports = {
  // ...rest of configuration
  plugins: [
    "eslint-plugin-foo-bar"
  ],
  rules: [
    "eslint-plugin-foo-bar/foo-bar": "error"
  ]
};
```

## Further Reading

To learn more about ESLint, creating custom rules, and plugins, refer to the following documentation:

- [ESLint docs home](https://eslint.org/docs/latest/)
- [Custom Rule docs](https://eslint.org/docs/latest/extend/custom-rules)
- [Plugin docs](https://eslint.org/docs/latest/extend/plugins)



