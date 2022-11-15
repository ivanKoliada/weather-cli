import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(`Error ${error}`));
}

const printSuccess = (message) => {
  console.log(chalk.bgGreen(`Success ${message}`));
}

const printHelp = () => {
  console.log(
    chalk.bgCyan(
      dedent(
        `
          Help
          Без параметров - вывод погоды
          -s [CITY] для установки города
          -h для ввода помощи
          -t [API_KEY] для сохранения токена
        `
      ),
    ),
  );
}

export { printError, printSuccess, printHelp };