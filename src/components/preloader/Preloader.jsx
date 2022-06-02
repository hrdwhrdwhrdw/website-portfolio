import React from "react";
import './Preloader.scss'

export default function Preloader() {
  return (
    <div className="box">
      <div className="container">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </div>
  );
}
