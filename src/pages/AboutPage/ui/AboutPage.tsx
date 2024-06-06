import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal'
import * as cls from './AboutPage.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

const AboutPage = () => {
  const {t} = useTranslation('about');
  const [isModal, setIsModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsModal((prev) => !prev);
  }, []);

  return (
    <div className={cls.AboutPage}>
      <Button 
        theme={ThemeButton.OUTLINE}
        onClick={onToggleModal}
        >
          {t('О себе')}
        </Button>
      <Modal isOpen={isModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Libero, dolor similique? Enim culpa consequatur veniam atque 
        dignissimos optio consequuntur ullam iure dolores! Omnis ea 
        tempore exercitationem tenetur obcaecati eos repellendus.
      </Modal>
    </div>
  )
}

export default AboutPage;