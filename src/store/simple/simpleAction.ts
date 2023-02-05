import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../storePlugin";

// actions
const toggleValue = createAction('toggleValue', withPayloadType<boolean>());

export default {
  toggleValue,
};
