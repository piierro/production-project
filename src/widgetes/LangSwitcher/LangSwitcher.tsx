import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import RuIcon from 'shared/assets/icons/ru.svg'
import EnIcon from 'shared/assets/icons/en.svg'

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }
  
  return (
    <Button className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR} 
      onClick={toggle}
    >
       
      {i18n.language === 'ru' ? 'ru' : 'en'}
    </Button>
  )
}