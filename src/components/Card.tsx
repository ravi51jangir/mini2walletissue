// src/components/Card.tsx
import * as React from "react";
import { CardProps } from "../type";

export const Card: React.FC<CardProps> = ({ imageSrc, title, alt }) => (
  <div className="flex flex-col flex-1">
    <div className="flex flex-col items-center px-8 pt-3 pb-9 bg-black rounded-xl border border-blue-700 border-solid shadow-sm">
      <img
        loading="lazy"
        src={imageSrc}
        alt={alt}
        className="object-contain rounded-full aspect-square shadow-[0px_4px_9px_rgba(255,228,228,0.25)] w-[71px]"
      />
    </div>
    <div className="z-10 self-center px-10 pt-1.5 mt-0 max-w-full text-2xl font-bold text-white whitespace-nowrap bg-black border border-white border-solid tracking-[2.16px] w-[135px]">
      {title}
    </div>
  </div>
);