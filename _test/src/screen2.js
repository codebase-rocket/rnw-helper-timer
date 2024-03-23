// Info: Project Screen2
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

var HOC;


// React (Private Scope)
import React, {useEffect, useState} from 'react';

import { useNavigate } from "react-router-dom";


// React Native Base Component (Private Scope)
import { Text, View, Image, Pressable } from 'react-native';


/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and Configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules

Return - None
*********************************************************************/
const loader = function(shared_libs){

  // Shared Dependencies (Managed by Main Entry Module)
  Lib = shared_libs;
  HOC = require('./moduleHoc')(Lib);


};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs){

  // Load loader
  loader(shared_libs);

  // Export Public Interfaces of this module
  return (props)=>HOC(Screen2, props) ;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////// Component START ///////////////////////////////
const Screen2 = function(){


  const navigate = useNavigate()


  return (
    <View style = {{margin: 200}}>
    <Pressable
      onPress={()=>navigate('/screen3')}
    >
      <Text style = {{fontSize: 48, color: 'red'}}>SCREEN 2</Text>
    </Pressable>
    </View>
  );

};/////////////////////////////// Component END ////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Screen2 = { // Private functions accessible within this modules only


};//////////////////////////Private Functions END///////////////////////////////
