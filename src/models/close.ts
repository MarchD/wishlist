import { IconButtonProps } from '@mui/material';

export interface IconProps extends IconButtonProps {
  onClick?: (...arg: any) => void;
}
