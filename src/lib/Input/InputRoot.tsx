import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const InputRoot: React.FC<Props> = ({ ...rest }) => {
  return (
    <input {...rest} />
  );
}