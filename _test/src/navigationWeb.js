// Info: Entry file for Web Navigation
'use strict';

// React (Private Scope)
import React from 'react';

// React Navigation Libraries (Private Scope)
import {  MemoryRouter as Router, createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from "react-router-dom";
// Shared Dependencies (Managed by Loader)
var Lib = {};

var Screens;

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

/*******************************************************************
Load dependencies and configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return nothing
*********************************************************************/
const loader = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Private Dependencies
  Screens = {
    Screen1: require('./screen1')(Lib, CONFIG),
    Screen2: require('./screen2')(Lib, CONFIG),
    Screen3: require('./screen3')(Lib, CONFIG),
  };

};////////////////////////// Module-Loader END ///////////////////////////////

/////////////////////////// Module Exports START ///////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Navigator;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const Navigator = function(props){ // Public functions accessible by other modules

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Screens.Screen1 />,
    },
    {
      path: '/screen2',
      element: <Screens.Screen2 />,
    },
    {
      path: '/screen3',
      element: <Screens.Screen3 />,
    },
  ]);



  // Create and Return Routes
  return(
    <RouterProvider
      router={router}
    />
  );





};//////////////////////////Public Functions END////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Navigator = { // Private functions accessible within this modules only

};//////////////////////////Private Functions END///////////////////////////////
