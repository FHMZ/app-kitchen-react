#!/bin/bash

rm -rf ./env.js
touch ./env.js

echo "window.env = {" >> ./env.js

vars=$(printenv | grep 'REACT_APP')

for i in $(echo $vars | sed "s/ / /g")
do
   if printf '%s\n' "$i" | grep -q -e '='; then
        varname=$(printf '%s\n' "$i" | sed -e 's/=.*//')
        varvalue=$(printf '%s\n' "$i" | sed -e 's/^[^=]*=//')
    fi

    echo "  $varname: \"$varvalue\"," >> ./env.js
done

echo "}" >> ./env.js

nginx -g 'daemon off;'
