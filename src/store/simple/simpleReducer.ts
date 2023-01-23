import { createReducer } from "@reduxjs/toolkit";
import simpleAction from './simpleAction';

export default createReducer(false, builder => {
  builder.addCase(simpleAction.toggleValue, (_state, action) => {
    return action.payload;
  });
});
