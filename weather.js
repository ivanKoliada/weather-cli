#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess, printWeather } from './services/log.services.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.services.js';
import { getWeather } from './services/api.services.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('не передан токен');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен сохранен');
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city) {
    printError('не передан город');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('Город сохранен');
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (error) {
    if (error?.response?.status == 401) {
      printError('неверно указан токен');
    } else printError(error.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
};

initCLI();
