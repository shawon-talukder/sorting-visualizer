/*
 *
 *
 ------->Title: useStore [ zustand store ]
 ->Description: globally handle store to access from anywhere
 ------>Author: Shawon Talukder
 -------->Date: 09/17/2023
 *
 *
 */

import { create } from "zustand";
import { generateArray } from "../utils/array";

type State = {
  array: number[];
  arrayLength: number;
  selectedSort: string;
};

type Actions = {
  setArray: (arr: State["array"]) => void;
  setArrayLength: (length: State["arrayLength"]) => void;
  setSelectedSort: (sort: State["selectedSort"]) => void;
};

const useArrayStore = create<State & Actions>((set) => ({
  arrayLength: 200,
  array: generateArray(200),
  selectedSort: "",
  setArrayLength: (length) => set(() => ({ arrayLength: length })),
  setSelectedSort: (sort) => set(() => ({ selectedSort: sort })),
  setArray: (arr) => set(() => ({ array: arr })),
}));

export default useArrayStore;
