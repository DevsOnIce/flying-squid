#!/usr/bin/env node

var mcServer=require("./");

var settings;

try {
  settings = require('./config/settings');
}
catch(err) {
  settings = require('./config/default-settings');
}

var commands = require('./config/commands');

var options = {
  'motd': settings.motd,
  'max-players': settings.maxPlayers,
  'port': settings.port,
  'online-mode': settings.onlineMode,
  gameMode:settings.gameMode,
  commands: commands,
  logging:settings.logging,
  generation:settings.generation,
  'modpe': settings.modpe,
  kickTimeout: settings.kickTimeout ? settings.kickTimeout : 10*1000
};

mcServer.createMCServer(options);


