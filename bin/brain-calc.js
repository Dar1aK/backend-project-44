#!/usr/bin/env node

import calcGame from '../games/calc.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const gamerName = getName();

calcGame(gamerName);
