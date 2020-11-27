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
$ npm install -g jd
$ jd COMMAND
running command...
$ jd (-v|--version|version)
jd/0.0.0 darwin-x64 node-v14.13.1
$ jd --help [COMMAND]
USAGE
  $ jd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jd hello [FILE]`](#jd-hello-file)
* [`jd help [COMMAND]`](#jd-help-command)

## `jd hello [FILE]`

```
USAGE
  $ jd hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ jd hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jamiedavenport/jd/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
