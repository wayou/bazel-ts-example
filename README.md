# Bazel TypeScript Examples

Examples demonstrate building TypeScript with Bazel.

<table>
    <tr>
        <td><a href="https://bazel.build/"><img src="https://bazel.build/images/bazel-icon.svg" height="120"/></a></td>
        <td><a href="http://www.typescriptlang.org/"><img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" height="120"/></a></td>
        <td><a href="https://nodejs.org/en/"><img src="https://nodejs.org/static/images/logo.svg" height="120"/></a></td>
        <td><a href="https://yarnpkg.com/en/"><img src="https://classic.yarnpkg.com/assets/feature-speed.png" height="120"/></a></td>
    </tr>
    <tr>
        <td>Bazel</td>
        <td>TypeScript</td>
        <td>NodeJs</td>
        <td>Yarn</td>
    </tr>
</table>


## Build

Run `bazel query ...` to see all available labels.

Run `yarn serve` to start local dev server with live reload.

Run `yarn stat` to see file statistic of the repo. It will print number of each file extension.

### Setup buidifier

There's a tool from the official [buildtool repo](https://github.com/bazelbuild/buildtools.git) called buildifier that can format our bazel files.

1. Install the [bazel VSCode extension](https://marketplace.visualstudio.com/items?itemName=DevonDCarew.bazel-code)
2. Clone [buildtools](https://github.com/bazelbuild/buildtools.git)
3. Run `bazel //buildifier:buildifier` to build the buildifier.
4. Set the path for the buildifier generated from above step in VSCode user setting `"bazel.buildifierPath": "private/var/tmp/_bazel_wayou/308cd286b0587bcdbdec05695018ee18/execroot/com_github_bazelbuild_buildtools/bazel-out/darwin-fastbuild/bin/buildifier/darwin_amd64_stripped/buildifier"`
5. Enable `"editor.formatOnSave": true`

### Troubleshooting

- If all types are discovered then all types need to be included as deps or typescript may error like `TS2688: Cannot find type definition file for 'foo'`.
- If you move the location of a `ts_devserver` target and try start the server again you may get error that the bazel says cannot load `/the/original/path/of/the/server/MF/file`. Just run `bazel clean --expunge` and try rebuild againa. If that's still not work, try change a port for the server and start again.
