#!/bin/sh

for file in $(find . -type f -name *-secret.template)
do
    cp $file $(echo $file | sed 's/-secret.template/-secret.yml/')
done
