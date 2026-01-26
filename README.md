# ForgeMath

A math utility module for ForgeScript, providing expressive and easy-to-use mathematical functions.

## Installation

### From GitHub (recommended)

```bash
npm install github:weebforge/ForgeMath
```

### For dev version

```bash
npm install github:weebforge/ForgeMath#dev
```

## Setup

Here is a small setup with an example code.

```ts
// import { ForgeMath } from "@weebforge/math";
const { ForgeMath } = require("@weebforge/math");

const client = new ForgeClient({
  extensions: [
    new ForgeMath()
  ]
});

client.commands.addCommand({
  name: "factorial",
  type: "messageCreate",
  code: `5! = $factorial[5]`
});
```

## Support

If you need any assistance, don't hesitate to reach out by opening a support form in the official BotForge Discord server! :D