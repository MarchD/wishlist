import { ModalProps as ModalPropsMaterial } from '@mui/material/Modal/Modal';

export enum ModalTypes {
  REGISTRATION = 'registration',
  NEW_GIFT = 'newGift',
  /* Is will be implemented */
  // CHOOSE_GIFT = 'CHOOSE_GIFT',
}

export interface modalState {
  isOpen: boolean;
  type: ModalTypes | null;
}

export interface ModalProps extends ModalPropsMaterial {
  title: string;
}
