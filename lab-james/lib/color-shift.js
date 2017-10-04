'use strict';

const colorShift = module.exports = {};

colorShift.shiftPalette = function(buffer, paletteStart, paletteEnd, indexRemove){

  if(indexRemove >= paletteStart && indexRemove <= paletteEnd){

    let header = buffer.slice(0, paletteStart);
    let palette = buffer.slice(paletteStart + 1, paletteEnd + 1);
    let pixels = buffer.slice(paletteEnd + 1);
    let value = buffer.slice(indexRemove, indexRemove + 1);
    let list = [header, palette, value, pixels];

    let newBuffer = Buffer.concat(list);

    return newBuffer;

  }
};

//=======================================================================================================

colorShift.halfValues = function(buffer, start, end){

  let newBuffer = buffer;

  for(var i = start; i <= end; i++){
    newBuffer[i] = Math.round(newBuffer[i]/2);
  }

  return newBuffer;

};

//=======================================================================================================

colorShift.colorShift = function(buffer, color){

  let newBuffer = buffer;
  let start;

  if(color === 'red'){
    start = 56;
  }

  if(color === 'blue'){
    start = 54;
  }

  if(color === 'green'){
    start = 55;
  }

  for(var i = start; i <= 1077; i += 4){
    newBuffer[i] = 255;
  }

  return newBuffer;

};

//=======================================================================================================

colorShift.invert = function(buffer){

  let newBuffer = buffer;

  for(var i = 54; i <= 1077; i +=4){
    let blueVal = newBuffer[i];
    let redVal = newBuffer[i + 2];
    newBuffer[i] = redVal;
    newBuffer[i + 2] = blueVal;
  }

  return newBuffer;

};
