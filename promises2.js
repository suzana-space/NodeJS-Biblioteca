import chalk from 'chalk'
import fs from 'fs'

// Javascript promises with methods async and await: 
// Using setTimeOut for loading operation 

async function readFile(directory) {
    try {
        console.log("Procurando arquivo...");
        const encoding = 'utf-8';
        let file;
    await new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                file = await fs.promises.readFile(directory, encoding);
                resolve();
            } 
            catch (error) {
                reject(error);
            }
            }, 5000);
        });
    console.log(chalk.green(file));
    console.log(chalk.yellow("Operação concluída com sucesso!"));
    } 
    catch (error) {
      solutionError(error);
    }
}
  
function solutionError(error){
    console.log(error)
    throw new Error(chalk.red(error.code, '- O arquivo não foi encontrado'))
}


readFile('./file.txt')
