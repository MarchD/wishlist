import { ModalProps as ModalPropsMaterial } from '@mui/material/Modal/Modal';

export enum ModalTypes {
  REGISTRATION = 'registration',
  NEW_GIFT = 'newGift',
  CHOOSE_GIFT = 'chooseGift',
  NEW_LIST = 'newList',
}

export interface ModalProps extends ModalPropsMaterial {
  title: string;
}
