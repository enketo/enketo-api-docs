curl 'https://enketo.org/js/navigation.json' > ./_data/navigation.json
browserify ./src/js/boot.js -o ./api/assets.js
jekyll build
