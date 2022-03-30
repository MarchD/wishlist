import React, { FC } from 'react';
import { Modal as ModalMaterial } from '@mui/material';
import { ModalProps } from '@Models/modal';
import Close from '@Components/common/icons/Close';
import { CardWrapperStyled } from './ModalStyled';

const Modal: FC<ModalProps> = (props) => {
  const { children, title, onClose, ...otherProps } = props;

  return (
    <ModalMaterial {...otherProps} onClose={onClose}>
      <CardWrapperStyled title={title} actionComponent={<Close onClick={onClose} />}>
        {children}
      </CardWrapperStyled>
    </ModalMaterial>
  );
};

export default Modal;
