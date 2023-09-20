/*
 ********************************************************************************
 *
 ------->Title: delay
 ->Description: file to return an promise with given time
 ------>Author: Shawon Talukder
 -------->Date: 09/19/2023
 *
 ********************************************************************************
 */

export const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getDelayInMS = (arrayLength: number) => {
  return arrayLength > 200
    ? 5
    : arrayLength > 80
    ? 30
    : arrayLength > 40
    ? 100
    : arrayLength > 20
    ? 150
    : 400;
};
