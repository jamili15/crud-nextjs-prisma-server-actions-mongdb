import { textAreaProps } from "@/types/type";
import React from "react";

const TextArea = ({ name, placeholder, type, value }: textAreaProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={5}
      value={value}
      className="px-2 py-1 rounded-sm border"
    />
  );
};

export default TextArea;
