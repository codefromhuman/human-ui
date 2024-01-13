import React, { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const ButtonRoot: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <button className="bg-teal-500" {...rest}>{label}</button>
  );
}