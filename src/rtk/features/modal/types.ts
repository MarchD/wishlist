import { ModalTypes } from 'src/models/modal';

export interface modalState {
  isOpen: boolean;
  type: ModalTypes | null;
}
