import React from "react";
import SignIn from "../../components/SignInForm/SignInForm";
import OnboardingTemplate from "../../components/Templates/OnboardingTemplate/OnboardingTemplate";

type SignInPageProps = {};

const SignInPage: React.FC<SignInPageProps> = () => {
  return (
    <OnboardingTemplate>
      <SignIn />
    </OnboardingTemplate>
  );
};

export default SignInPage;
