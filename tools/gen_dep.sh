#!/bin/bash

# generate the dependency graph
# reference: https://blog.bazel.build/2015/06/17/visualize-your-build.html
# TODO: detect dot avalaibility and install it with `brew install graphviz`

desdir='dist'
infile="$desdir/graph.in"
image="$desdir/graph.png"
mkdir -p $desdir
bazel query '...' --output graph >$infile
dot -Tpng <$infile >$image
open $image || echo "command open is not avalaible"
