import React from "react";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "default" | "transparent" | "secondary";
	children: React.ReactNode;
	className?: string;
}
