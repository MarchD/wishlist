import React from 'react';
import { Box } from '@mui/material';
import CardWrapper from '../layout/card-wrapper/CardWrapper';
import Input from '../input/Input';
import Container from '../layout/container/Container';
import Avatar from '../common/avatar/Avatar';
import Button from '../common/button/Button';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <Container size="md">
      <CardWrapper title="Профиль">
        <Avatar />
        <Box component="form" className={styles.form}>
          <div className={styles.inputs}>
            <Input label="Email" />
            <Input label="Password" type="password" />
          </div>

          <Input label="Email" />
          <Input label="Password" type="password" />
          <Button variant="contained" className={styles.button}>
            Сохранить
          </Button>
        </Box>
      </CardWrapper>
    </Container>
  );
}

export default Profile;
