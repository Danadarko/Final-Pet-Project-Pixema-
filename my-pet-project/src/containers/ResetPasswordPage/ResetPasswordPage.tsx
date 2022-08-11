import React from "react";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import OnboardingTemplate from "../../components/Templates/OnboardingTemplate/OnboardingTemplate";
import styles from "../../components/Templates/OnboardingTemplate/OnboardingTemplate.module.css";

type ResetPasswordPageProps = {};

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  return (
    <OnboardingTemplate className={styles.wrapperResetPassword}>
      <ResetPassword></ResetPassword>
    </OnboardingTemplate>
  );
};

export default ResetPasswordPage;
