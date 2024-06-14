import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgetes/LangSwitcher/LangSwitcher'
import { RoutePath } from 'shared/config/routeConfig/RouteConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const {t} = useTranslation('Выйти');
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch]);


  if(authData) {
    return (
      <div className={classNames(cls.Container, {}, [className])}>
        <Button 
          theme={ThemeButton.OUTLINE}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Container}>
        <div className={cls.Links}>
          <AppLink theme={AppLinkTheme.SECONDARY} 
            to={RoutePath.main} className={cls.aboutLink}>
            About Me
          </AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} 
            to={RoutePath.project}>
            Project
          </AppLink>
        </div>
        <div className={cls.theme}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang}/>
        </div>
      </div>
    </div>
  )
}