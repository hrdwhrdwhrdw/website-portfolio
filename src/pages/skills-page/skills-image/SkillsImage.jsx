import React, { useEffect, useState } from "react";

export default function SkillsImage() {
  const [isSkillsImageLoaded, setIsSkillsImageLoaded] = useState(false);
  useEffect(() => {
    setIsSkillsImageLoaded(true);
  }, []);
  return (
    <div
      className={
        "skills__image" + (isSkillsImageLoaded ? " skills__image-loaded" : "")
      }
    >
      <div className="skills__image-block">
        <div className="side -main"></div>
        <div className="side -left"></div>
      </div>
      <div className="skills__image-block">
        <div className="side -main"></div>
        <div className="side -left"></div>
      </div>
      <div className="skills__image-block">
        <div className="side -main"></div>
        <div className="side -left"></div>
      </div>
    </div>
  );
}
