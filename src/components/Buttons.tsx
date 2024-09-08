import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectState, setKind } from "../slices/selectSlice";
import "./Buttons.css";

export default function Buttons() {
  const selectState: selectState = useSelector((state: any) => state.select);
  const dispatch = useDispatch();

  function handleClickSprite() {
    dispatch(setKind({ name: "kind", value: "sprite" }));
  }

  function handleClickMesh() {
    dispatch(setKind({ name: "kind", value: "mesh" }));
  }

  function handleClickMaterial() {
    dispatch(setKind({ name: "kind", value: "material" }));
  }

  function handleClickTexture() {
    dispatch(setKind({ name: "kind", value: "texture" }));
  }

  function handleClickBgm() {
    dispatch(setKind({ name: "kind", value: "bgm" }));
  }

  function handleClickSfx() {
    dispatch(setKind({ name: "kind", value: "sfx" }));
  }

  function handleClickMecanim() {
    dispatch(setKind({ name: "kind", value: "mecanim" }));
  }

  function handleClickAnimation() {
    dispatch(setKind({ name: "kind", value: "animation" }));
  }

  function handleClickPanel() {
    dispatch(setKind({ name: "kind", value: "panel" }));
  }

  function handleClickButton() {
    dispatch(setKind({ name: "kind", value: "button" }));
  }

  function handleClickIcon() {
    dispatch(setKind({ name: "kind", value: "icon" }));
  }

  function handleClickProp() {
    dispatch(setKind({ name: "kind", value: "prop" }));
  }

  function handleClickEfx() {
    dispatch(setKind({ name: "kind", value: "efx" }));
  }

  return (
    <div className="Buttons">
      <div className="buttons-wrap">
        <div className="small-title">그래픽</div>
        <div className="buttons-kind-graphic">
          <div
            className={`button button-sprite ${
              selectState.kind === "sprite" ? "selected" : ""
            }`}
            onClick={handleClickSprite}
          >
            스프라이트
          </div>
          <div
            className={`button button-mesh ${
              selectState.kind === "mesh" ? "selected" : ""
            }`}
            onClick={handleClickMesh}
          >
            메쉬
          </div>
          <div
            className={`button button-material ${
              selectState.kind === "material" ? "selected" : ""
            }`}
            onClick={handleClickMaterial}
          >
            머티리얼
          </div>
          <div
            className={`button button-texture ${
              selectState.kind === "texture" ? "selected" : ""
            }`}
            onClick={handleClickTexture}
          >
            텍스쳐
          </div>
          <div
            className={`button button-mecanim ${
              selectState.kind === "mecanim" ? "selected" : ""
            }`}
            onClick={handleClickMecanim}
          >
            메카님
          </div>
          <div
            className={`button button-animation ${
              selectState.kind === "animation" ? "selected" : ""
            }`}
            onClick={handleClickAnimation}
          >
            애니메이션
          </div>
          <div
            className={`button button-panel ${
              selectState.kind === "panel" ? "selected" : ""
            }`}
            onClick={handleClickPanel}
          >
            패널
          </div>
          <div
            className={`button button-button ${
              selectState.kind === "button" ? "selected" : ""
            }`}
            onClick={handleClickButton}
          >
            버튼
          </div>
          <div
            className={`button button-icon ${
              selectState.kind === "icon" ? "selected" : ""
            }`}
            onClick={handleClickIcon}
          >
            아이콘
          </div>
        </div>
        <div className="space" />
        <div className="small-title">사운드</div>
        <div className="buttons-kind-sound">
          <div
            className={`button button-bgm ${
              selectState.kind === "bgm" ? "selected" : ""
            }`}
            onClick={handleClickBgm}
          >
            배경음악
          </div>
          <div
            className={`button button-sfx ${
              selectState.kind === "sfx" ? "selected" : ""
            }`}
            onClick={handleClickSfx}
          >
            효과음
          </div>
        </div>
        <div className="space" />
        <div className="small-title">엔진</div>
        <div className="buttons-kind-engine">
          <div
            className={`button button-prop ${
              selectState.kind === "prop" ? "selected" : ""
            }`}
            onClick={handleClickProp}
          >
            프랍
          </div>
          <div
            className={`button button-efx ${
              selectState.kind === "efx" ? "selected" : ""
            }`}
            onClick={handleClickEfx}
          >
            이펙트
          </div>
        </div>
      </div>
    </div>
  );
}
