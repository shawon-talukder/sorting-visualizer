/*
 *
 *
 ------->Title: 
 ->Description: 
 ------>Author: Shawon Talukder
 -------->Date: 09/17/2023
 *
 *
 */

const getValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const generateArray = (arrLength: number) => {
  const array = [];
  for (let i = 0; i < arrLength; i++) {
    array.push(getValue(5, 550));
  }

  return array;
};

/***************************************************************************
 *
 *
 ->Description: check if two arrays are equal or not
 ----->@Params: array1: @Type: array of numbers
                array2: @Type: array of numbers
 ---->@returns: boolean, True if arrays are equal else false
 *
 *
 ***************************************************************************
 */
export const areArraysEqual = (array1: number[], array2: number[]) => {
  let n = array1.length;
  let m = array2.length;

  if (n !== m) return false;

  for (let i = 0; i < n; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};
