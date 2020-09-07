# web3govern - documentation

> work in progress


### GitHub Community Onboarding

```yaml
#<><> Greetings <><><><><><><>
#
# Comment to be posted to welcome users when they open their first PR
firstPRWelcomeComment: >
  Thanks for opening this pull request! Please check out our contributing guidelines.

# Comment to be posted to congratulate user on their first merged PR
firstPRMergeComment: >
  Awesome work, congrats on your first merged pull request!

# Comment to be posted to on first time issues
firstIssueWelcomeComment: >
  Thanks for opening your first issue here! Be sure to follow the issue template!
```

### Issue Linker - Discourse to and from GitHub

```yaml
# <><> IssueLink Adder
#
# Insert Issue (Discourse/Github etc) link in PR description based on the Issue ID in PR title.
insertIssueLinkInPrDescription:

   # specify the placeholder for the issue link that should be present in the description
  descriptionIssuePlaceholderRegexp: "^Issue link: (.*)$"
  matchers:

    # only the first matching entry is replaced
    discourseIssueMatch:

      # specify the regexp of issue id that you can find in the title of the PR
      # the match groups can be used to build the issue id (${1}, ${2}, etc.).
      titleIssueIdRegexp: \[(a-zA-Z-[0-9]{4})\]

      # the issue link to be added. ${1}, ${2} ... are replaced with the match groups from the
      # title match (remember to use quotes)
      descriptionIssueLink: "[${1}](https://issues.discourse.org/discourse/browse/${1}/)"
    docOnlyIssueMatch:
      titleIssueIdRegexp: \[(a-zA-Z-X{4})\]
      descriptionIssueLink: "`Document only change, no discourse topic`"
```

### Title Validator

Validate based upon `regex` 

> visit [regexr.com](https://regexr.com/) to test that your regex phrase works

```yaml
# <><> Title Validator  <><><><><>
# Verifies if commit/PR titles match the regexp specified

verifyTitles:
  # Regular expression that should be matched by titles of commits or PR
  titleRegexp: ^\[a-zA-Z-[0-9]{4}\].*$|^\[a-zA-Z-XXXX\].*$

  # If set to true, it will always check the PR title (as opposed to the individual commits).
  alwaysUsePrTitle: true

  # If set to true, it will only check the commit in case there is a single commit.
  # In case of multiple commits it will check PR title.
  # This reflects the standard behavior of Github that for `Squash & Merge` GitHub

  # uses the PR title rather than commit messages for the squashed commit 

  # For single-commit PRs it takes the squashed commit message from the commit as expected.
  #
  # If set to false it will check all commit messages. This is useful when you do not squash commits at merge.
  validateEitherPrOrSingleCommitTitle: true
  # The title the GitHub status should appear from.
  statusTitle: "Title Validator"
  # A custom message to be displayed when the title passes validation.
  successMessage: "Validation successful!"
  # A custom message to be displayed when the title fails validation.
  # Allows insertion of ${type} (commit/PR), ${title} (the title validated) and ${regex} (the titleRegexp above).
  failureMessage: "Wrong ${type} title: ${title}"
```

### Branch / Pull-Request

> Note: GitHub has some specific logic as to what gets given priority in the `commit` messages depending on if its a PR / Squash / etc

```yaml
## PR/Branch Up-To-Date Checker 
# Check if the branch is up to date with master when certain files are modified
checkUpToDate:
  # The default branch is "master", change the branch if you want to check against a different target branch  
  targetBranch: master
  files:
  # File paths that you want to check for
    - a-zA-Z/migrations/*
    - a-zA-Z/migrations/**/*
    - contracts/alembic.ini
```
