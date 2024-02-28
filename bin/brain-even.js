#!/usr/bin/env node

import getName from "../src/cli.js";
import evenGame from "../src/even.js";

console.log("Welcome to the Brain Games!");

const gamerName = getName();

evenGame(gamerName);
