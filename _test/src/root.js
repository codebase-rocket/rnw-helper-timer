// Info: Project Root
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

var CONFIG;

// React (Private Scope)
import React, {useEffect, useState} from 'react';

// React Native Base Component (Private Scope)
import { ActivityIndicator, Text, View, Image } from 'react-native';


var COUNT = 0


/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and Configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules

Return - None
*********************************************************************/
const loader = function(shared_libs, config){

  // Shared Dependencies (Managed by Main Entry Module)
  Lib = shared_libs;

  CONFIG = config;


};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Load loader
  loader(shared_libs, config);

  // Export Public Interfaces of this module
  return Root;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////// Component START ///////////////////////////////
const Root = function(){

  console.log('TEST!!', Lib);


  // const AppComponent = function(){
  //
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         padding: 16,
  //       }}
  //     >
  //       <Text>Progress Screen</Text>
  //       <Text>Root</Text>
  //       <View
  //         style={{
  //           width: '80%',
  //          height: '100%',
  //           backgroundColor: '#EEEEEE',
  //           //borderRadius: 10,
  //           //overflow: 'hidden',
  //         }}
  //       >
  //         <View
  //           style={{
  //              //width: `${(progress/progress_count.total_count) * 100}%` ,
  //              height: '100%',
  //             backgroundColor: '#6200EE'
  //             }}
  //           >
  //
  //         <Image
  //           source={{uri:'https://placehold.co/600x407/CCCCCC/FFFFFF.png'} }
  //           style = {{height: 200, width: 200}}
  //         />
  //
  //         </View>
  //
  //       </View>
  //     </View>
  //   );
  // }
    //Lib.timer = Lib.Timer();

  const Navigation = _Root.determineNavigator();


  return (
    <Navigation/>
  );

};/////////////////////////////// Component END ////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Root = { // Private functions accessible within this modules only

  determineNavigator: function(){
    if(CONFIG.APP_PLATFORM == 'BROWSER'){
      return require('./navigationWeb')(Lib, CONFIG);
    }
    else{
      return require('./navigationNative')(Lib, CONFIG);
    }
  }

};//////////////////////////Private Functions END///////////////////////////////
