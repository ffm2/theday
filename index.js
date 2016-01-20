/**
* @fileOverview Exports a function that finds the previous and the next day in a date format.
* @name Index
*/
'use strict';
 
 
var table = {
                after: 1,
                before: -1
};
 
/**
* This method returns the previous, next or same day in a date format.
* @param {string} [gap] A gap from today. It can be 'before' or 'after'.
* @returns {object} A date (current, previous, or next)
*/
module.exports = function (gap) {  
    /**
     * Gap can be -1, +1 if table[gap] is delcared, otherwise it is set to 0.
     */
                gap = table[gap] || 0;
 
                var date = new Date();
                date.setDate(date.getDate() + gap);
               
                return date;
};