// Info: Project Screen1
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
  return (props)=>HOC(Screen1, props) ;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////// Component START ///////////////////////////////
const Screen1 = function(props){

  const navigate = useNavigate()

  const asd = function(asd, cb){
    console.log('alaldmads', asd);
    //cb(true)
    //setTimeout(()=>{cb(true)},3000)

  }

  var data = [
    {
      callback: (...args)=> asd('demo111', ...args),
      interval: 2000
    },
    {
      callback: (...args)=> asd('demo2222', ...args),
      interval: 2000
    }
  ]

  // var dataa = {
  //   callback: (...args)=> asd('demo111', ...args),
  //   hour: 17,
  //   minute: 4
  // }
  //
  var dataaa = {
    callback: (...args)=> asd('demo111', ...args),
    hour: 17,
    minute: 5
  }
  //
  var dataaaa = {
    callback: (...args)=> asd('demo111', ...args),
    hour: 17,
    minute: 59
  }

const backgroundRefresh = Lib.Timer();

useEffect(()=>{
  // backgroundRefresh.startSchedule(
  //   dataaaa
  // )
},[])

// backgroundRefresh.startSchedule(dataaa)
// backgroundRefresh.startSchedule(dataaaa)


  return (
    <View style = {{margin: 200}}>
      <Pressable
        onPress={()=>navigate('/screen2')}
      >
        <Text style = {{fontSize: 48, color: 'red'}}>SCREEN 1</Text>
      </Pressable>
    </View>
  );

};/////////////////////////////// Component END ////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Screen1 = { // Private functions accessible within this modules only


};//////////////////////////Private Functions END///////////////////////////////
