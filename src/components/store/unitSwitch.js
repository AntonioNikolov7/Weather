import { createSlice } from "@reduxjs/toolkit";

export const switchUnitSlice = createSlice({
  name: "switchUnit",
  initialState: {
    unit: "C",
  },
  reducers: {
    unitC: (state) => {
      state.unit = "C";
    },
    unitF: (state) => {
      state.unit = "F";
    },
  },
});

export default switchUnitSlice.reducer;
export const { unitC, unitF } = switchUnitSlice.actions;
