#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log.services.js';
import { saveKeyValue } from './services/storage.services.js';



const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {

  }
  if (args.t) {
    saveKeyValue('token', args.t)
  }
};

initCLI();