import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/LoginSlice";
import { getLoginState } from "../../model/selectors/selectLoginState/getLoginState";
import { Text, TextTheme } from "../../../../shared/ui/Text/Text"
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { userName, password, error, isLoading }= useSelector(getLoginState)
  
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');

    if (storedUserName) {
      dispatch(loginActions.setUserName(storedUserName));
    }
    if (storedPassword) {
      dispatch(loginActions.setPassword(storedPassword));
    }
  }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    localStorage.setItem('userName', value);
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    localStorage.setItem('password', value);
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    const authData = { userName, password };
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(authData));
  }, [userName, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма Авторизации')}/>
      {error && <Text text={error}  theme={TextTheme.ERROR}/>}
      <Input 
        autoFocus
        type="text" 
        className={cls.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={userName}
      />
      <Input 
        autoFocus
        type="text" 
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button className={cls.loginBtn} 
        theme={ThemeButton.BACKGROUND}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})