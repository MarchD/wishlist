import { ModalProps as ModalPropsMaterial } from '@mui/material/Modal/Modal';

export enum ModalTypes {
  REGISTRATION = 'registration',
  /* Is will be implemented */
  // NEW_GIFT = 'NEW_GIFT',
  // CHOOSE_GIFT = 'CHOOSE_GIFT',
}

export interface modalState {
  isOpen: boolean;
  type: ModalTypes | null;
}

export interface ModalProps extends ModalPropsMaterial {
  title: string;
}
