#!/usr/bin/env node

import gcdGame from '../games/gcd.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const gamerName = getName();

gcdGame(gamerName);
