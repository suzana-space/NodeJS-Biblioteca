import chalk from 'chalk'
import fs from 'fs'

function solutionError(error){
    console.log(error)
    throw new Error(chalk.red(error.code, '- O arquivo não foi encontrado'))
}

// Javascript is compatible with old versions - then() catch() && async/await
// Using then() and catch(): 

function readFile(directory){
    const encoding = 'utf-8'
    fs.promises
        .readFile(directory, encoding)
        .then(function (file) { console.log(chalk.green(file))})
        .catch(solutionError)
    
}

readFile('./file.txt')