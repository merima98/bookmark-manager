import {
  FieldError,
  FieldPath,
  FieldValues,
  FormProvider,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
  UseFormProps,
  UseFormReturn,
  useFormState,
} from "react-hook-form";
import {
  FC,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import getValue from "lodash-es/get";

import Input from "../Input";
import { InputProps } from "../Input";
import Label from "../Label";

interface FieldProps<T extends object, FieldName extends FieldPath<T>> {
  registerOptions?: RegisterOptions<T, FieldName>;
  name: FieldName;
  label: string;
}

export type FormInputProps<
  T extends object,
  FieldName extends FieldPath<T>
> = InputProps & FieldProps<T, FieldName>;

//TO DO: Add Password input. This needs to be added in new component.

export interface FormProps<T extends object = object>
  extends Omit<HTMLAttributes<HTMLFormElement>, "onSubmit" | "onInvalid"> {
  onSubmit: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
  children: ReactNode;
  formOptions?: UseFormProps<T>;
  formInstance: UseFormReturn<T>;
}

export interface FormType<T extends object = object> extends FC<FormProps<T>> {
  Input: <FieldName extends FieldPath<T>>(
    props: FormInputProps<T, FieldName>
  ) => ReactElement | null;
  //TO DO: Add Password
}

const Form: FormType = forwardRef(
  <T extends FieldValues>(
    {
      children,
      onSubmit,
      onInvalid,
      className,
      formInstance,
      ...rest
    }: FormProps<T>,
    ref: ForwardedRef<HTMLFormElement>
  ) => {
    return (
      <FormProvider {...formInstance}>
        <form
          ref={ref}
          onSubmit={formInstance.handleSubmit(onSubmit, onInvalid)}
          className={className}
          {...rest}
        >
          {children}
        </form>
      </FormProvider>
    );
  }
) as never;

Form.Input = function FormInput<
  T extends FieldValues,
  FieldName extends FieldPath<T>
>({
  registerOptions,
  name,
  label,
  className,
  ...rest
}: FormInputProps<T, FieldName>) {
  const { register, control } = useFormContext<T>();
  const { errors } = useFormState<T>({ control, name });
  const error = getValue(errors, name) as FieldError | undefined;
  const errorMessage = error?.message || "";

  return (
    <>
      <Label>{label}</Label>
      <Input
        //TO DO: Add message for error, add state, and className if needed.
        required={!!registerOptions?.required}
        {...rest}
        {...register(name, registerOptions)}
      />
    </>
  );
};

export default Form;
