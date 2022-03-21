import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { closeModal } from 'src/rtk/features/modal';
import Modal from './modal/Modal';
import RegistrationModal from './RegistrationModal';
import NewGiftModal from './NewGiftModal';
import ChoosingGift from './ChoosingGift';

const ModalManager = () => {
  const { t } = useTranslation('common');
  const { isOpen, type } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const closeModalHandler = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const modals = useMemo(
    () => ({
      registration: {
        title: t('registration'),
        component: RegistrationModal,
      },
      newGift: {
        title: t('newGift'),
        component: NewGiftModal,
      },
      chooseGift: {
        title: t('chooseGift'),
        component: ChoosingGift,
      },
    }),
    [t]
  );

  if (!type || !modals[type]) return null;

  const RenderModalComponent = modals[type].component;

  return (
    <Modal title={modals[type].title} open={isOpen} onClose={closeModalHandler}>
      <RenderModalComponent />
    </Modal>
  );
};

export default ModalManager;
