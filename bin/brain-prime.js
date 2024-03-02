#!/usr/bin/env node

import primeGame from '../games/prime.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const gamerName = getName();

primeGame(gamerName);
