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
