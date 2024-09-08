import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Input.css";
import { inputState, set } from "../slices/inputSlice";
import { selectState } from "../slices/selectSlice";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Input() {
  const selectState: selectState = useSelector((state: any) => state.select);
  const inputState: inputState = useSelector((state: any) => state.input);
  const dispatch = useDispatch();

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(set({ name: "fileName", value: event.target.value }));
  }

  function handleClickButton() {
    let result = "",
      front = "",
      back = "";

    if (selectState.kind === "sprite") {
      front = "spr_";
    } else if (selectState.kind === "mesh") {
      front = "msh_";
    } else if (selectState.kind === "material") {
      front = "mtr_";
    } else if (selectState.kind === "texture") {
      front = "tex_";
    } else if (selectState.kind === "bgm") {
      front = "bgm_";
    } else if (selectState.kind === "sfx") {
      front = "sfx_";
    } else if (selectState.kind === "mecanim") {
      front = "mcn_";
    } else if (selectState.kind === "animation") {
      front = "ani_";
    } else if (selectState.kind === "panel") {
      front = "pnl_";
    } else if (selectState.kind === "button") {
      front = "btn_";
    } else if (selectState.kind === "icon") {
      front = "icn_";
    } else if (selectState.kind === "prop") {
      front = "prp_";
    } else if (selectState.kind === "efx") {
      front = "efx_";
    }

    if (front !== "") {
      if (back !== "") {
        result = `${front}${inputState.fileName}${back}`;
      } else {
        result = `${front}${inputState.fileName}`;
      }
    } else {
      result = `${inputState.fileName}`;
    }

    dispatch(set({ name: "result", value: result }));
  }

  return (
    <div className="Input">
      <div className="input-wrap">
        <div className="input-top">
          <div className="label">입력</div>
          <input
            className="filename"
            onChange={handleChangeInput}
            value={inputState.fileName}
          />
          <div className="button" onClick={handleClickButton}>
            생성
          </div>
        </div>
        <div className="input-bottom">
          <div className="label">결과</div>
          <input className="result" value={inputState.result} />
          <CopyToClipboard text={inputState.result}>
            <div className="paste">복사</div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
