import React from "react";
import { ITextInput } from "./interfaces";

const InputField = React.forwardRef<HTMLInputElement, ITextInput>(
  ({ inputId, className, errorText, inputText, inputType, ...rest }, ref) => {
    return (
      <div className={`relative flex flex-col ${className}`}>
        <p className={`absolute right-0 top-0 text-[0.75rem] text-status-red`}>
          {errorText?.length ? errorText : ""}
        </p>
        <label
          className={`${errorText && "text-status-red"} pb-[0.563rem] text-[0.75rem]`}
          htmlFor={inputId}
        >
          {inputText}
        </label>
        <input
          type={inputType}
          ref={ref}
          {...rest}
          className={`${errorText && "border-status-red text-status-red focus:outline-status-red"} rounded-[0.75rem] border border-tertiary-400 py-[0.75rem] pl-[1.5rem] text-[0.875rem] focus:outline-primary-200`}
        />
      </div>
    );
  },
);

InputField.displayName = "InputField";
export default InputField;
