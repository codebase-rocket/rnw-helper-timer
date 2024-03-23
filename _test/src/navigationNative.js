// Info: Entry file for Native navigation
'use strict';

// React (Private Scope)
import React, {useEffect} from 'react';

// React-Native Components (None) (Private scope)
import {Linking, Text, View} from 'react-native';

// React Navigation Libraries (Private Scope)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Shared Dependencies (Managed by Loader)
var Lib = {};


var Screens;

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
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

  // Create Stack-Navigator
  const Stack = createNativeStackNavigator();

  // Create and Return Navigator
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Screen1'
      >
        <Stack.Screen name="Screen1" component={Screens.Screen1} />
        <Stack.Screen name="Screen2" component={Screens.Screen2} />
        <Stack.Screen name="Screen3" component={Screens.Screen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );

};//////////////////////////Public Functions END////////////////////////////////
