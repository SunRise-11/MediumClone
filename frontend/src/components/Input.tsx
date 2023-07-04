"use client"
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

type Props = {
  error?: boolean;
  name: string;
  id?: string;
  inputType?: string;
  label: string;
  placeHolder?: string;
  errorMessage?: string | null;
  variant?: 'standard' | 'outlined' | 'filled';
  description?: string;
  required?: boolean;
  onChangeForm?: (event) => void;
  value: string | null;
}

export default function Input({
  error,
  name,
  inputType,
  label,
  errorMessage,
  variant,
  description,
  required,
  id,
  placeHolder,
  onChangeForm,
  value, }: Props) {
  let type: 'standard' | 'outlined' | 'filled' = 'standard';
  let desc = description;
  if (variant) type = variant;
  if (errorMessage) desc = '';
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        className="xl:w-full min-w-[300px]"
        value={value}
        onChange={onChangeForm}
        fullWidth
        id={id}
        type={inputType}
        required={required}
        error={error || errorMessage ? true : false}
        label={label}
        name={name}
        placeholder={placeHolder}
        variant={type}
        helperText={desc}
      />
      {errorMessage && (
        <p className="text-red-600 px-2 text-[12px] font-mono">
          <span>* </span>
          {errorMessage}
        </p>
      )}
    </Box>
  );
}
