import chalk from 'chalk'
import fs from 'fs'

console.log(chalk.blue("hello world"))

function readFile(directory){
    const encoding = 'utf-8'
    const msg = fs.readFile(directory, encoding, (err, file) => {
        if(err){
            solutionError(err)
        }else{
            console.log(chalk.greenBright(file))

        }
    }) 
    return msg
}

function solutionError(error){
    console.log(error)
    throw new Error(chalk.red(error.code, '- O arquivo não foi encontrado'))
}

readFile('OneDrive/file.txt')