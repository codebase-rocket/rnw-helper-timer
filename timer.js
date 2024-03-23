// Info: Custom hook for managing time interval
'use strict';

// React (Private Scope)
import React, {useEffect, useCallback, useRef} from  'react';

var Lib;


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  Lib = shared_libs;

  // Return Public Funtions of this module
  return (timer_refs)=> UseTimer(timer_refs);

};//////////////////////////// Module Exports END //////////////////////////////


//////////////////////////////// Component START ///////////////////////////////

/********************************************************************
Custom hook for managing time interval

Params- None

@return Actions for Background Refresh
*********************************************************************/
const UseTimer = function(timer_refs){

  // Initialize ref to store Reference of each inteval
  if(Lib.Utils.isNullOrUndefined(timer_refs)){
    timer_refs = useRef({});
  }

  // Function to start a specific timer
  const start_interval_based_timer = useCallback((...args)=>_UseTimer.startIntervalBasedTimer(timer_refs, ...args), []);

  // Function to start at scheduled time
  const start_schedule_based_timer = useCallback((...args)=>_UseTimer.startScheduleBasedTimer(timer_refs, ...args), []);

  // Function to stop a specific timer
  const stop_timer = useCallback((...args)=>_UseTimer.stopTimer(timer_refs, ...args), []);

  // Function to stop a all timer
  const stop_all_timer = useCallback((...args)=>_UseTimer.stopTimers(timer_refs, ...args), []);


  // Start all timers when the component mounts (if required)
  useEffect(function(){

    // Stop all timers when the component unmounts
    return () => {
      _UseTimer.stopTimers(timer_refs);
    };

  }, []);


  // Return the start and stop functions for each timer
  return {
    start: start_interval_based_timer, // start timer
    startSchedule: start_schedule_based_timer, // start timer
    stop: stop_timer, // stop timer
    stopAll: stop_all_timer, // stop all timer
  };

};/////////////////////////////// Component END ////////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _UseTimer = { // Private functions accessible within this modules only

  /********************************************************************
  Start Interval based Timer

  @params- {Reference} timer_refs - Pass React 'useRef' instance as it is
  @params- {Function} func - Function to be executed after specific interval
  @params- {Number} time_interval - in secong

  @return {String} - Unique ID to store timer reference
  *********************************************************************/
  startIntervalBasedTimer: function(timer_refs, func, time_interval){

    // Initialize reference unique id
    let timer_id = _UseTimer.generateId();

    // Convert time_interval in MS
    let time_interval_in_ms = time_interval * 1000;

    // set timer reference against unique timer-id
    timer_refs.current[timer_id] = setTimeout(func, time_interval_in_ms);

    // Return Id
    return timer_id;

  },


  /********************************************************************
  Start Scheduled based Timer

  @params- {Reference} timer_refs - Pass React 'useRef' instance as it is
  @params- {Function} func - Function to be executed after specific interval
  @params- {Number} hour - Hour at which you want to execute function
  @params- {Number} minute - Minute at which you want to execute function

  Return - None
  *********************************************************************/
  startScheduleBasedTimer: function(timer_refs, func, hour, minute){

    // get dalay between current and given hour and minute
    let time_interval = _UseTimer.getScheduledRemainigTime(hour, minute);

    // Start interval based timer
    _UseTimer.startIntervalBasedTimer( timer_refs, func, time_interval );

  },


  /********************************************************************
  Get schedule remainig time

  @params- {Number} hour - Hour at which you want to execute function
  @params- {Number} minute - Minute at which you want to execute function

  Return - None
  *********************************************************************/
  getScheduledRemainigTime: function(hour, minute){

    // Get current time
    let now = new Date();

    // Get time when you want to hit the function
    let target_time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);

    // If the target time is in the past, schedule it for tomorrow
    if(now > target_time){
      target_time.setDate(target_time.getDate() + 1);
    }

    // Return difference of current and scheduled time
    return (target_time - now);

  },


  /********************************************************************
  Stop specific timer

  @params- {Reference} timer_refs - Pass React 'useRef' instance as it is
  @params- {String} id - id of specific timer you want to stop

  Return None
  *********************************************************************/
  stopTimer: function(timer_refs, timer_id){

    // Get reference of specific setTime from useRef
    // Check if timer ref is available
    if (timer_id in timer_refs.current){

      // clear timer
      clearTimeout(timer_refs.current[timer_id]); // Clear the interval if it exists

      // Delete key (timer_id) from timer ref
      delete timer_refs.current[timer_id];

    }

  },


  /********************************************************************
  Clear All timer

  @params- {Reference} timer_refs - Pass React 'useRef' instance as it is

  Return None
  *********************************************************************/
  stopTimers: function(timer_refs){

    if(
      !Lib.Utils.isNullOrUndefined(timer_refs) &&
      !Lib.Utils.isEmpty(timer_refs.current)

      ){
      // Iterate reference of all timer
      Object.values(timer_refs.current).forEach(function(timer_id){
        clearTimeout(timer_id); // Clear timer
      });

      // Reset all references (ids)
      timer_refs.current = {};


    }



  },


  /********************************************************************
  Get schedule remainig time

  Params- None

  @return {String} - Unique id
  *********************************************************************/
  generateId: function(){
    return _UseTimer.generateRandomString(12);
  },


  /********************************************************************
  Generate Unique string

  @params {Number} length - length of Unique string

  @return {String} - Unique string
  *********************************************************************/
  generateRandomString: function(length){
    // Standard character set
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    // LCG parameters
    // 'm', 'a', and 'c' are constants used in the LCG algorithm
    const m = Math.pow(2, 32);
    const a = 1664525;
    const c = 1013904223;

    // Using the current timestamp as an initial seed value for the LCG
    let seed = Date.now();

    // LCG function to generate pseudo-random numbers
    function lcg() {
      // Updating the seed value using the LCG formula
      seed = (a * seed + c) % m;
      // Normalizing the result to produce a number between 0 and 1
      return seed / m;
    }

    // Generating the random string
    for (let i = 0; i < length; i++) {
      // For each iteration, generate a pseudo-random number using the LCG,
      // multiply it by the length of the character set to get a random index,
      // and use this index to select a character from the character set.
      result += characters.charAt(Math.floor(lcg() * characters.length));
    }

    // Returning the final generated random string
    return result;
  }


};//////////////////////////Private Functions END///////////////////////////////
