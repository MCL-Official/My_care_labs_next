"use client";

import { ReactNode, CSSProperties } from "react";

interface ButtonProps {
  onClick: () => void;
  disable?: boolean;
  className?: string;
  name?: string;
  Icon?: ReactNode;
  style?: CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disable = false,
  className = "",
  style = {},
  name,
  Icon,
}) => {
  return (
    <button
      className={className}
      style={style}
      disabled={disable}
      onClick={onClick}
    >
      {Icon && <span>{Icon}</span>}
      {name && <span>{name}</span>}
    </button>
  );
};
