'use strict';

const readFile = require('./lib/readfile.js');
const colorShift = require('./lib/color-shift.js');
const writeFile = require('./lib/writefile.js');


const newBitMap = function(oldAddress, transform, newAddress, ...args){

  let read = readFile(oldAddress);
  let transformedData = transform(read, ...args);

  writeFile(newAddress, transformedData);

};

// newBitMap('../asset/bitmap.bmp', colorShift.shiftArray, '../asset/bitmapTest.bmp', 54, 1077, 54);
// newBitMap('../asset/bitmap.bmp', colorShift.halfValues, '../asset/bitmapTest.bmp', 1078, 11077);
// newBitMap('../asset/bitmap.bmp', colorShift.colorShift, '../asset/bitmapTest1.bmp', 'blue');
// newBitMap('../asset/bitmap.bmp', colorShift.colorShift, '../asset/bitmapTest2.bmp', 'red');
// newBitMap('../asset/bitmap.bmp', colorShift.colorShift, '../asset/bitmapTest3.bmp', 'green');
// newBitMap('../asset/bitmap.bmp', colorShift.invert, '../asset/bitmapTest4.bmp');
