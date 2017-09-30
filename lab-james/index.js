'use strict';

const readFile = require('./lib/readfile.js');
const colorShift = require('./lib/color-shift.js');
const writeFile = require('./lib/writefile.js');


const newBitMap = function(oldAddress, callback, newAddress, ...args){

  writeFile(newAddress, callback(readFile(oldAddress), ...args));

};

newBitMap('../asset/bitmap.bmp', colorShift.shift1, '../asset/bitmap3.bmp', 54, 1077, 54);
