import React from "react";
import { IButton } from "./interfaces";

const variants = {
  default: "bg-primary-200 text-tertiary-100 hover:bg-primary-100",
  transparent:
    "border border-secondary-200 hover:text-tertiary-100 hover:bg-secondary-200",
  secondary: "text-tertiary-100 bg-secondary-100 hover:bg-secondary-400",
};

const Button = React.forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`${variants[props.variant]} ${
        props.className
      } } prose-sub-title py-[0.938rem] uppercase duration-300 disabled:bg-tertiary-300`}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
