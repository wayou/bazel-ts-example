#!/bin/bash
git ls-files | wc -l | awk '{$1=$1;print $1 " total"}'
git ls-files| sed 's/.*\.//' | sort | uniq -c | sort -r|awk '{$1=$1;print}'