import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.disabled]: disabled
  }

  return (
    <button 
      type="button"
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}