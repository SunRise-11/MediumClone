import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  const {
    error,
    name,
    inputType,
    label,
    errorMessage,
    variant,
    description,
    required,
    onChangeForm,
    value,
  } = props;
  let type = 'standard';
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
        type={inputType}
        required={required}
        error={error || errorMessage}
        label={label}
        name={name}
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
