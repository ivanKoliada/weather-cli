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
          HELP
          Без параметров - вывод погоды
          -s [CITY] для установки города
          -h для ввода помощи
          -t [API_KEY] для сохранения токена
        `
      ),
    ),
  );
}

const printWeather = (data) => {
  console.log(
    chalk.bgMagenta(
      dedent(
        `
          WEATHER
          Погода в городе - ${data.name}
          ${data.weather[0].description}
          Температура: ${Math.round(data.main.temp)}°
          Ощущается: ${Math.round(data.main.feels_like)}°
          Влажность: ${data.main.humidity}%
          Скорость ветра: ${Math.round(data.wind.speed)}m/s
        `,
      ),
    ),
  );
}



export { printError, printSuccess, printHelp, printWeather };