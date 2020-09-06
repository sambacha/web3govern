# web3dappbot

> A GitHub App built with [Probot](https://github.com/probot/probot) that a web3 probot dapp bot

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Functions and Progmatic Abilities

Simple way of executing the `web3govern` *probot* application programmatically:

```javascript
// main.js
const { Probot } = require("probot");
const app = require("./index.js");

// pass a probot app as a function
Probot.run(app);
```

## Contributing

If you have suggestions for how web3dappbot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 The Contributors
