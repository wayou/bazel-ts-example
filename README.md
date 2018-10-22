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


## Build

Run `bazel query ...` for all available lables.

Run `bazel run src:devserver` to start local dev server.


### Tips

 If all types are discovered then all types need to be included as deps
 or typescript may error like `TS2688: Cannot find type definition file for 'foo'`.
 

