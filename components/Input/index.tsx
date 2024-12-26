import clsx from "clsx";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      ref={ref}
      className={clsx("border-2 border-neutral-200 h-12 rounded", className)}
      {...rest}
    />
  );
});

export default Input;
