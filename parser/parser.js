//  parser.js
//
//  Takes a set of plain text and parses into a set of habits.
'use strict';

module.exports.parse = (input) => {
  if(!input) throw new Error("Input must be provided to the parser.");

  //  Split on newlines.
  return input.split("\n")
    //  Remove empty lines.
    .filter((line) => {
      return /\S/.test(line); // line is not empty if there's any character
    })
    //  Map into objects.
    .map((line) => {
      return {
        goal: line
      };
    });
}