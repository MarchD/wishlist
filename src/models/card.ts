import { CardProps } from '@mui/material';
import { ReactNode } from 'react';

export interface CardWrapperProps extends CardProps {
  title?: string;
  actionComponent?: ReactNode;
}
