"use client";
import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Form, { FormType } from "@/components/Form";
import Header from "@/components/Header";

interface FormData {
  email: string;
  password: string;
}
const RegisterForm = Form as FormType<FormData>;

export default function Register() {
  const registerFormInstance = useForm<FormData>({ mode: "all" });
  const onSubmit = (values: FormData) => {
    //Add logic on submit
  };
  return (
    <main>
      {/* TO DO: ADD Auth Layout, so that we do not call Header again. */}
      <Header />
      <div className="flex flex-col w-6/12 mx-auto p-8 border-2 border-neutral-200 rounded-xl gap-2">
        <RegisterForm
          formInstance={registerFormInstance}
          onSubmit={onSubmit}
          className="flex flex-col gap-2"
        >
          <RegisterForm.Input name="email" label="Email" />
          <RegisterForm.Input name="password" label="Password" />
        </RegisterForm>
        <Button
          type="submit"
          onClick={() => onSubmit(registerFormInstance.getValues())}
        >
          Sign Up
        </Button>
      </div>
    </main>
  );
}
