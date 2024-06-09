import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as cls from './AboutPage.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

const AboutPage = () => {
  const {t} = useTranslation('О себе');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={cls.AboutPage}>
      <Button 
        theme={ThemeButton.OUTLINE}
        onClick={onShowModal}
      >
        {t('О себе')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
    </div>
  )
}

export default AboutPage;