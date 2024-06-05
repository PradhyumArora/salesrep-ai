import { AuthContextProvider } from "@/context/use-auth-context";
import React from "react";

const SignUpFormProvider = () => {
  return <AuthContextProvider>form-provider</AuthContextProvider>;
};

export default SignUpFormProvider;
