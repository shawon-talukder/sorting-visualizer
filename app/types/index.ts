/*
 ********************************************************************************
 *
 ------->Title: types
 ->Description: this is main file to define types for this project
 ------>Author: Shawon Talukder
 -------->Date: 09/18/2023
 *
 ********************************************************************************
 */

export type AnimationTypes = {
  swap: number[];
  comparison: number[];
};

export type NestedSortTypes = {
  currentIndex: number;
  swap: number[];
  comparison: number[][];
};

export type QuickSortTypes = {
  pivot: number;
  swap: number[][];
  comparison: number[][];
};
