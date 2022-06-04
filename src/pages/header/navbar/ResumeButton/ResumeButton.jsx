import React from "react";
import "./ResumeButton.scss";
import resume from '../../../../assets/AlbertResume.pdf'

export default function ResumeButton() {
  return (
    <button className="vertical">
      <a href={resume} target="_blank" className="text" rel="noreferrer">Resume</a>
    </button>
  );
}
