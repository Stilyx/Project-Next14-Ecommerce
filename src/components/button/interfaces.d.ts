import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "default" | "transparent";
	children: React.ReactNode;
}
