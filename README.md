# web3govern - GitHub Bot for Decentralized Governance

<img src="assets/icon.png" width="350" align="right">

> There is no token, nor do you need a token to use this application

## Features

* Discourse to GitHub
* General GitHub Issue / PR / Repository Management
* User *onboarding* 

#### Planned Features 

* Ethereum Transaction Notifier
* Clubhouse to GitHub
* Polling (in GitHub)
* Governance Orchestration (Setup Meetings, etc)

## Setting up `web3govern` in your repository

### Configure the Github App

After installing the Github app, create .github/web3bot.yml in the default branch to enable it
It will start scanning for pull requests within few minutes.


> Note: this property is configured in `lib/utils.js`

Scheme is an `action` to `result` format. The process is like so
```yaml
result
    - action
```




### Basic Settings

```yaml
#<><> Labeler <><><><><><><>
#
# Enable "labeler" for your PR that would add labels to PRs based on the paths that are modified in the PR.
labelPRBasedOnFilePath:
  # Add 'Implemented' to any changes within 'accepted' folder or any sub-folders
  Implemented:
    - accepted/**/*

  # Add 'community-strategy' to any file changes within 'yips' folder
  community-strategy:
    - yips/*

  # Complex: Add 'contracts/core' label to any change within the 'core' package
  contracts/core:
    - contracts/core/*
    - contracts/core/**/*  

  # ADD 'Proposed' label to any change to *.proposed.md files within the source dir
  Proposed:
    - yips/**/*.proposed.md

# "Labeler" Flags
labelerFlags:
  # If this flag is changed to 'false', labels would only be added when the PR is first created and not when existing is updated

  # The default is 'true' which means the labels would be added when PR is updated even if they were removed by the user   
  labelOnPRUpdates: true
```

## Documentation 

see `docs/`

### Local Development

> Nodejs version 10+

#### Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

#### Contributing

If you have suggestions for how `web3dappbot` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

SPDX-License-Identifier:  [ISC](LICENSE)
