// Info: ModuleHoc
'use strict';

// React (Private Scope)
import React, { useEffect, useState, useRef } from 'react';

import {Text, View, PanResponder} from 'react-native'

import { useNavigate } from "react-router-dom";


// Shared Dependencies (Managed by Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return nothing
*********************************************************************/
const loader = function (shared_libs, config) {

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Private Dependencies - Module specific Modals
  // None

};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return ModuleHoc;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
/********************************************************************
Heigher Order Component to initalize hooks and load config (Module level)

@param {Jsx} ModuleNavigator - Navigator of current Module
@param {Set} module_name - Name of current Module
@param {Set} module_svgs - Icons of current module
@param {Set} module_translation - Translation of current module. Enum['default_translation', 'session_translation']

@return {Jsx} ModuleNavigator - Navigator of current Module
*********************************************************************/
const ModuleHoc = function(
   ModuleNavigator,
   props,
   module_name,
){

  const idle_timer_ref =useRef(null);

  const navigate = useNavigate();

  const timer = Lib.Timer();

  // Create a PanResponder to reset the idle timer on user interaction
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e) => {
        console.log('kjabdkjandkjadns');
        //resetIdleTimer();
        return true;
      },
      onPanResponderGrant: (event, gestureState) => {
      // Handle touch start
      console.log('Touch Start:', gestureState);
      resetIdleTimer();
      return true;
    },
    onPanResponderMove: (event, gestureState) => {
      // Handle touch move
      console.log('Touch Move:', gestureState);
      resetIdleTimer();
      return;
    },
    onPanResponderRelease: (event, gestureState) => {
      // Handle touch release
      console.log('Touch Release:', gestureState);
      startIdleTimer();
    },
    })
  ).current;


  const resetIdleTimer = () => {
      timer.stopAll()
  };

  const startIdleTimer = function(){

    timer.start(
      function(){
        alert('skjcnkjascn')
          console.log('lksanclkasnc');
          //navigate('/');
      },
      5
    )
    // console.log('id', id);
    // idle_timer_ref.current = id
  };

  useEffect(()=>{
    startIdleTimer()

    return()=>{
      resetIdleTimer()
    }
  },[])

  return(
    <View
        {...panResponder.panHandlers}
        style={{ flex: 1 }}
      >
      <ModuleNavigator/>
    </View>
  )

};//////////////////////////Public Functions END////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _ModuleHoc = { // Private functions accessible within this modules only




};//////////////////////////Private Functions END///////////////////////////////
