import React from 'react';

export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}
