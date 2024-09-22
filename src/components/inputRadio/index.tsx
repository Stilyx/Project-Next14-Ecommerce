import React from "react";
import { IRadioInput } from "./interfaces";

const InputRadio = React.forwardRef<HTMLInputElement, IRadioInput>(
  ({ optionName, radioId, inputValue, ...rest }, ref) => {
    return (
      <label
        htmlFor={radioId}
        className="flex w-full cursor-pointer flex-row gap-[1rem] rounded-[0.75rem] border border-tertiary-400 px-[1rem] py-[1.125rem] duration-300 hover:border-primary-200 has-[:checked]:border-primary-200"
      >
        <input
          type="radio"
          id={radioId}
          className="peer hidden"
          ref={ref}
          {...rest}
          value={inputValue}
        />
        <span className="relative flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full border border-tertiary-400 peer-checked:[&>*]:bg-primary-200">
          <span className="absolute h-[0.625rem] w-[0.625rem] rounded-full"></span>
        </span>
        <p className="text-[0.875rem] font-bold">{optionName}</p>
      </label>
    );
  },
);

InputRadio.displayName = "InputRadio";
export default InputRadio;
