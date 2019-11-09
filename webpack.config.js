const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')
console.log(__dirname)
console.log({outputPath})

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath
    }

}