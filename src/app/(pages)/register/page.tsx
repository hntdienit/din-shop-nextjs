import Container from "@/components/Container";
import FormWrap from "@/components/FormWrap";
import React from "react";
import RegisterForm from "./RegisterForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const RegisterPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <Container>
        <FormWrap>
          <RegisterForm currentUser={currentUser} />
        </FormWrap>
      </Container>
    </>
  );
};

export default RegisterPage;
