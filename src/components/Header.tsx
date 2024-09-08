import React from "react";
import "./Header.css";
import fistIcon from "../fist.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-wrap">
        <img className="fist-icon" src={fistIcon} />
        <div className="title">해월리 돌주먹 에셋 네이밍 컨벤션 헬퍼</div>
      </div>
    </div>
  );
}
