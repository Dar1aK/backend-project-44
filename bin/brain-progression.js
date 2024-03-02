#!/usr/bin/env node

import progressionGame from '../games/progression.js';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const gamerName = getName();

progressionGame(gamerName);
