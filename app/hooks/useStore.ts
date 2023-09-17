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

type State = {
  arrayLength: number;
  selectedSort: string;
};
type Actions = {
  setArrayLength: (length: State["arrayLength"]) => void;
  setSelectedSort: (sort: State["selectedSort"]) => void;
};

const useArrayStore = create<State & Actions>((set) => ({
  arrayLength: 200,
  selectedSort: "",
  setArrayLength: (length) => set(() => ({ arrayLength: length })),
  setSelectedSort: (sort) => set(() => ({ selectedSort: sort })),
}));

export default useArrayStore;
