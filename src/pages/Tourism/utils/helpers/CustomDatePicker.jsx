import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import EventIcon from '@mui/icons-material/Event';
import { Box, IconButton, TextField } from '@mui/material';
import ru from 'date-fns/locale/ru';
import { format } from 'date-fns';

const CustomDatePicker = ({ value, onChange, label }) => {
  const [open, setOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState('Сегодня');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleOpen} size="small">
        <EventIcon />
      </IconButton>
      <TextField
        value={displayValue}
        sx={{ minWidth: '140px' }}
        onClick={handleOpen}
        InputProps={{
          readOnly: true,
        }}
      />

      {open && (
        <DatePicker
          open={open}
          onClose={handleClose}
          value={value}
          onChange={(newValue) => {
            if (newValue) {
              onChange(newValue);
              setDisplayValue(format(newValue, 'EEE d MMM', { locale: ru }));
              setOpen(false);
            }
          }}
          textField={(params) => (
            <TextField {...params} fullWidth label={label} style={{ display: 'none' }} />
          )}
          format="EEE d MMM"
          // locale={ru}
        />
      )}
    </Box>
  );
};

export default CustomDatePicker;
