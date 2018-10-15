# Bazel TypeScript Examples

Examples demonstrate building TypeScript with Bazel.

<table>
    <tr>
        <td><a href="https://bazel.build/"><img src="https://bazel.build/images/bazel-icon.svg" height="120"/></a></td>
        <td><a href="http://www.typescriptlang.org/"><img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" height="120"/></a></td>
        <td><a href="https://nodejs.org/en/"><img src="https://nodejs.org/static/images/logo.svg" height="120"/></a></td>
        <td><a href="https://yarnpkg.com/en/"><img src="https://yarnpkg.com/assets/feature-speed.png" height="120"/></a></td>
    </tr>
    <tr>
        <td>Bazel</td>
        <td>TypeScript</td>
        <td>NodeJs</td>
        <td>Yarn</td>
    </tr>
</table>


## Installing

Following the [official guide](https://docs.bazel.build/versions/master/install.html) to install bazel.


## Setup

Currently when you following the [rules_typescript](https://github.com/bazelbuild/rules_typescript) 
README to setup the workpace, you will get error like this:

```bash
ERROR: Failed to load Skylark extension '@io_bazel_rules_webtesting//web:web.bzl'.
It usually happens when the repository is not defined prior to being used.
```

Reference the [WORKSPACE](https://github.com/google/startup-os/blob/master/WORKSPACE) from [google/startup-os](https://github.com/google/startup-os) to setup the typescript for now.


### Tips

 If all types are discovered then all types need to be included as deps
 or typescript may error out with TS2688: Cannot find type definition file for 'foo'.
 