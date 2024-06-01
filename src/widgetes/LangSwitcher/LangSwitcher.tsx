import { classNames } from 'shared/lib/classNames/className'
import * as cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import RuIcon from 'shared/assets/icons/ru.svg'
import EnIcon from 'shared/assets/icons/en.svg'
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }
  
  return (
     <Button className={classNames(cls.LangSwitcher, {}, [className])}
       theme={ThemeButton.CLEAR} 
       onClick={toggle}
       >
       
        {i18n.language === 'ru' ? <RuIcon /> : <EnIcon />}
    </Button>
  )
}