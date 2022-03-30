import React, { ChangeEvent, FC, useState } from 'react';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { InputStyled, FileStyled } from './InputStyled';
import Delete from '../icons/Delete';

const File: FC<TextFieldProps> = ({ onChange, value, ...props }) => {
  const [image, setImage] = useState('');

  const changeHandle = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { files } = event.target as HTMLInputElement;

    if (files) {
      setImage(URL.createObjectURL(files[0]));
    }

    return onChange
      ? onChange(files as unknown as ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)
      : null;
  };

  return (
    <FileStyled $isImage={!!image}>
      <label>
        {image && <img src={image} alt={image} />}
        <AddPhotoAlternateOutlinedIcon />
        <InputStyled
          onChange={changeHandle}
          $isImage={!!image}
          // @ts-ignore TODO
          value={value?.filename}
          type="file"
          {...props}
        />
      </label>
      {image && (
        <Delete
          onClick={() => {
            setImage('');
            if (onChange) {
              onChange(null as unknown as ChangeEvent<HTMLTextAreaElement | HTMLInputElement>);
            }
          }}
        />
      )}
    </FileStyled>
  );
};
export default File;
