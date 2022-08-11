import React from "react";
import SignUp from "../../components/SignUpForm/SignUpForm";
import OnboardingTemplate from "../../components/Templates/OnboardingTemplate/OnboardingTemplate";
import styles from "../../components/Templates/OnboardingTemplate/OnboardingTemplate.module.css";

type SignUpPageProps = {};

const SignUpPage: React.FC<SignUpPageProps> = () => {
  return (
    <OnboardingTemplate className={styles.wrapperSignUp}>
      <SignUp></SignUp>
    </OnboardingTemplate>
  );
};

export default SignUpPage;
