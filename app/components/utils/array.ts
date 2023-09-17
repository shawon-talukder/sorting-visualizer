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
    array.push(getValue(5, 600));
  }

  return array;
};
