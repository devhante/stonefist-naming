import { createSlice } from "@reduxjs/toolkit";
import { selectName } from "../type";

export type selectState = {
  kind:
    | "sprite"
    | "mesh"
    | "material"
    | "texture"
    | "bgm"
    | "sfx"
    | "mecanim"
    | "animation"
    | "panel"
    | "button"
    | "icon"
    | "prop"
    | "efx";
};

export type selectSetKindAction = {
  payload: selectSetKindPayload;
  type: string;
};

export type selectSetKindPayload = {
  name: selectName;
  value:
    | "sprite"
    | "mesh"
    | "material"
    | "texture"
    | "bgm"
    | "sfx"
    | "mecanim"
    | "animation"
    | "panel"
    | "button"
    | "icon"
    | "prop"
    | "efx";
};

export const initialState: selectState = {
  kind: "texture",
};

export const selectSlice = createSlice({
  name: "select",
  initialState: initialState,
  reducers: {
    setKind: (state: selectState, action: selectSetKindAction) => {
      state["kind"] = action.payload.value;
    },
  },
});

export const { setKind } = selectSlice.actions;
export default selectSlice.reducer;
