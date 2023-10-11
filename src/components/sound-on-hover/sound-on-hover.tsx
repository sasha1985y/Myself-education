import React, { useState } from "react";

interface Props {
  soundUrl: string;
  children: React.ReactNode;
}

const SoundOnHover: React.FC<Props> = ({ soundUrl, children }) => {
  const [audio] = useState(new Audio(soundUrl));
  //"../public/sounds/pop-window-click-menu-info-09.mp3"

  const playSound = () => {
    audio.play();
  };

  return (
    <div onMouseOver={playSound}>
      {children}
    </div>
  );
};

export default SoundOnHover;
