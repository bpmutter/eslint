const {RuleTester} = require("eslint");
const fooBarRule = require("./foo-bar");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "foo-bar",
  fooBarRule,
  {
    valid: [{
      code: "const foo = 'bar';",
    }],
    invalid: [{
      code:"const foo = 'baz';",
      output: 'const foo = "bar";',
      errors: 1,
    }],
  }
);

console.log("All tests passed!");