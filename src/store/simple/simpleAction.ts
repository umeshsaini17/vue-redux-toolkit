import { createAction } from "@reduxjs/toolkit";

// Helper method used to infer action type.
function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

// actions
const toggleValue = createAction('toggleValue', withPayloadType<boolean>());

export default {
  toggleValue,
};
