sleep 5 &&
yarn db migrate:refresh &&
yarn db seed &&
tail -F anything
