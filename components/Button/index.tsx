import clsx from "clsx";
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

type ButtonProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, isLoading, className, ...rest } = props;

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={clsx(
        "bg-blue-500 py-2 px-3 rounded text-sm text-white h-14",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
