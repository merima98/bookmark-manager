import clsx from "clsx";
import { LabelHTMLAttributes, forwardRef } from "react";

type LabelProps = {} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { className, children } = props;
  return (
    <label className={clsx("text-base font-semibold", className)}>
      {children}
    </label>
  );
});

export default Label;
