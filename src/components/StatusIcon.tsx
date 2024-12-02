// src/components/StatusIcon.tsx
import * as React from "react";
import { StatusIconProps } from "../type";

export const StatusIcon: React.FC<StatusIconProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain shrink-0 ${className}`}
  />
);
