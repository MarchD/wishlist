import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { closeModal } from 'src/rtk/features/modalSlice';
import Modal from './modal/Modal';
import RegistrationModal from './RegistrationModal';
import NewGiftModal from './NewGiftModal';

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
