import React from "react";
import { ITextInput } from "./interfaces";

const Input = React.forwardRef<HTMLInputElement, ITextInput>((props, ref) => {
  return (
    <div className="relative flex flex-col">
      <p
        className={`${props.error && "text-status-red"} absolute right-0 top-0 text-[12px]`}
      >
        Wrong Email
      </p>
      <label
        className={`${props.error && "text-status-red"} pb-[9px] text-[12px]`}
        htmlFor={props.inputId}
      >
        {props.inputText}
      </label>
      <input
        id={props.inputId}
        placeholder={props.placeholderText}
        type={props.inputType}
        ref={ref}
        {...props}
        className={`${props.error && "text-status-red border-status-red focus:outline-status-red"} rounded-[12px] border border-tertiary-400 py-[8px] pl-[24px] text-[14px] focus:outline-primary-200`}
      />
    </div>
  );
});

Input.displayName = "Input";
export default Input;
