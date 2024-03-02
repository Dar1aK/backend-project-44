#!/usr/bin/env node

import evenGame from '../games/even.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const gamerName = getName();

evenGame(gamerName);
