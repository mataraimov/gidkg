import React from 'react';
import { TextField, ClickAwayListener, Box, Typography } from '@mui/material';

const SearchTextField = ({ label, value, onChange, suggestions, onSuggestionClick }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        endAdornment: (
          <ClickAwayListener onClickAway={() => onSuggestionClick(null)}>
            <Box
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                maxHeight: '200px',
                overflowY: 'auto',
                bgcolor: 'background.paper',
                zIndex: 1,
                boxShadow: (theme) => theme.shadows[1],
              }}
            >
              {suggestions.map((suggestion, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  component="div"
                  onClick={() => onSuggestionClick(suggestion)}
                  sx={{
                    padding: '8px',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                    },
                  }}
                >
                  {suggestion}
                </Typography>
              ))}
            </Box>
          </ClickAwayListener>
        ),
      }}
    />
  );
};

export default SearchTextField;
