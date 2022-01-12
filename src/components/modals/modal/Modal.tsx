import React, { FC } from 'react';
import { Modal as ModalMaterial } from '@mui/material';
import { ModalProps } from 'src/models/modal';
import Close from '../../common/close/Close';
import { CardWrapperStyled } from './ModalStyled';

const Modal: FC<ModalProps> = (props) => {
  const { children, title, onClose, ...otherProps } = props;

  return (
    <ModalMaterial {...otherProps}>
      <CardWrapperStyled title={title} actionComponent={<Close onClick={onClose} />}>
        {children}
      </CardWrapperStyled>
    </ModalMaterial>
  );
};

export default Modal;
