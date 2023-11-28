const common = `
    --require src/setup/assertions.js
    --require src/setup/hooks.js
    --require src/steps/**.js
`
module.exports = {
  default: `${common} src/scenarios/**.feature`,

}
