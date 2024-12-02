import * as React from "react";
import { PlayerControlsProps } from "../type";

export const PlayerControls: React.FC<PlayerControlsProps> = ({ controls }) => (
  <div className="flex gap-3.5 items-center px-7 mt-2.5 bg-white rounded-2xl shadow-sm">
    {controls.map((control, index) => (
      <img
        key={index}
        loading="lazy"
        src={control.src}
        alt=""
        className={`object-contain shrink-0 ${control.width} ${control.className || ''}`}
      />
    ))}
  </div>
);