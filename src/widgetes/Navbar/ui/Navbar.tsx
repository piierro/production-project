import { classNames } from 'shared/lib/classNames/className'
import * as cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Container}>
        <div className={cls.Links}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.aboutLink}>ABOUT</AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/project'}>PROJECT</AppLink>
        </div>
        <div className={cls.theme}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}