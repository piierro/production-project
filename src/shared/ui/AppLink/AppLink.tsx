import { classNames } from "shared/lib/classNames/className"
import * as cls from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom"
import { FC } from "react"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondory'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    children: React.ReactNode;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {to, 
    className, 
    children, 
    theme = AppLinkTheme.PRIMARY, 
    ...otherProps}
     = props;

  return (
    <Link to={to} 
      className={classNames(cls.Applink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}