jd
==

Jamie&#39;s CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jd.svg)](https://npmjs.org/package/jd)
[![Downloads/week](https://img.shields.io/npm/dw/jd.svg)](https://npmjs.org/package/jd)
[![License](https://img.shields.io/npm/l/jd.svg)](https://github.com/jamiedavenport/jd/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @jamiedavenport/jd
$ jd COMMAND
running command...
$ jd (-v|--version|version)
@jamiedavenport/jd/0.1.0 darwin-x64 node-v14.13.1
$ jd --help [COMMAND]
USAGE
  $ jd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jd help [COMMAND]`](#jd-help-command)
* [`jd project:new NAME [DESCRIPTION]`](#jd-projectnew-name-description)
* [`jd trello:new [FILE]`](#jd-trellonew-file)

## `jd help [COMMAND]`

```
USAGE
  $ jd help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `jd project:new NAME [DESCRIPTION]`

```
USAGE
  $ jd project:new NAME [DESCRIPTION]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/project/new.ts](https://github.com/jamiedavenport/jd/blob/v0.1.0/src/commands/project/new.ts)_

## `jd trello:new [FILE]`

```
USAGE
  $ jd trello:new [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/trello/new.ts](https://github.com/jamiedavenport/jd/blob/v0.1.0/src/commands/trello/new.ts)_
<!-- commandsstop -->
