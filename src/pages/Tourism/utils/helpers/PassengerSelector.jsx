import { Box, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { Person } from '@mui/icons-material';

const PassengerSelector = ({ initialCount = 1, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    onCountChange(count);
  }, [count, onCountChange]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', minWidth: '140px' }}>
      <IconButton size="small">
        <Person />
      </IconButton>
      <TextField
        value={count}
        InputProps={{
          readOnly: true,
          disableUnderline: true,
        }}
        variant="filled"
        sx={{
          backgroundColor: 'transparent',
          bottom: '6px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '& .MuiFilledInput-root': {
            backgroundColor: 'transparent',
          },
          '& .MuiFilledInput-underline:before': {
            borderBottom: 'none',
          },
          '& .MuiFilledInput-underline:after': {
            borderBottom: 'none',
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        }}
      >
        <IconButton
          onClick={() => setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))}
          size="small"
        >
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => setCount((prevCount) => prevCount + 1)} size="small">
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PassengerSelector;
