// Info: Dependency Manager. Configuration Loader
'use strict';

// Initialize Lib and Config
var Lib = {};
var Config = {};


//////////////////////////// Module Exports START //////////////////////////////
module.exports = function(platform){

  /* Load Configuration */
  //Config = require('../config.js')();

  Config['APP_PLATFORM'] = platform


  // Asset cache library
  //Lib.Cache = require('rnw-helper-cache')(Lib, Config);

  Lib.Timer = require('rn-helper-timer')(Lib, Config);


  /* Return */
  return [Lib, Config];

};//////////////////////////// Module Exports END //////////////////////////////
