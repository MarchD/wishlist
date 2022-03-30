import styled, { ThemedStyledProps } from 'styled-components';
import Input from '../input/Input';

interface InputStyledProps extends ThemedStyledProps<any, any> {
  isImage: boolean;
}

export const InputStyled = styled(Input)`
  &.MuiFormControl-root {
    display: ${(props: InputStyledProps) => (props.$isImage ? 'none' : 'inline-flex')};
  }

  input {
    opacity: 0;
    cursor: pointer;
  }
`;

export const FileStyled = styled('div')`
  position: relative;

  label {
    cursor: pointer;

    &:hover {
      [data-testid='AddPhotoAlternateOutlinedIcon'] {
        color: ${({ theme, $isImage }: InputStyledProps) =>
          $isImage ? theme.color.black : theme.color.orange};
      }
    }
  }

  img {
    max-height: 150px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    cursor: pointer;
  }

  [data-testid='AddPhotoAlternateOutlinedIcon'] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme, $isImage }) => ($isImage ? 'transparent' : theme.color.green)};
    transition: all 0.5s;
    cursor: pointer;
  }

  button {
    position: absolute;
    bottom: -2.25rem;
    right: 0;
    border: none;
    background: none;
  }
`;
