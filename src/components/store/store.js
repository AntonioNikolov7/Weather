import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./unitSwitch";

export default configureStore({
  reducer: { unitSwitch: switchReducer },
});
