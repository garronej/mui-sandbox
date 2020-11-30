
import React from 'react';
import Button from '@material-ui/core/Button';
import type { ButtonProps } from '@material-ui/core/Button';
import { styledTyped } from "./util/styledTyped";

export type Props = {
	color: "red" | "blue";
	children?: React.ReactNode;
	className?: string;
} & Pick<ButtonProps, "disabled">;

function Component(props: Props) {
	const { disabled, children, className } = props;
	return (
		<Button
			disabled={disabled}
			className={className}
		>
			{children}
		</Button>
	);
}

export const MyButtonBest = styledTyped(
	Component,
	({ theme, color }) => `
    background: ${color === "red" ?
			"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" :
			"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"};

    boxShadow: ${color === "red" ?
			"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" :
			"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"};

    margin: ${theme.spacing(2)}px;

    &:hover { 
      color: ${theme.palette.text.hint}
    }

    &.Mui-disabled {
        background: rgba(0, 0, 0, 0.12);
        boxShadow: none;
    }
  `
);



