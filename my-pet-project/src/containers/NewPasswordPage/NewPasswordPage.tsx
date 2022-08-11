import React from "react";
import NewPasswordForm from "../../components/NewPasswordForm/NewPasswordForm";
import OnboardingTemplate from "../../components/Templates/OnboardingTemplate/OnboardingTemplate";
import styles from "../../components/Templates/OnboardingTemplate/OnboardingTemplate.module.css";

type NewPasswordPageProps = {};

const NewPasswordPage: React.FC<NewPasswordPageProps> = () => {
  return (
    <OnboardingTemplate className={styles.wrapperNewPassword}>
      <NewPasswordForm></NewPasswordForm>
    </OnboardingTemplate>
  );
};

export default NewPasswordPage;
