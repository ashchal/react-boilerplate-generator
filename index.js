#!/usr/bin/env node
const inquirer = require("inquirer");
const fs = require("fs");

const generator = require("./scripts/projectGenerator");
const screenGenerator = require("./scripts/screenMaker");
const libraryInstaller = require("./scripts/installer");
const help = require("./scripts/help")
var arguments = process.argv;

switch (arguments[2]) {
  case "generate":
    generator.projectgenerate();
    break;
  case "make:screen":
    screenGenerator.screenMaker(arguments[3]);
    break;
  case "make:install":
    libraryInstaller.installer();
    break;
  case "help":
      return help.help()
  default:
    return;
}
