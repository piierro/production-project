import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as cls from './LoginPage.module.scss'

export const LoginPage = () => {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={cls.LoginPage} >
      <LoginForm />
    </div>
  );
};
