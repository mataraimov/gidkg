import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const SearchButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
  padding: '10px 16px',
  fontSize: '0.875rem',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
export const PublishButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
  padding: '10px 16px',
  fontSize: '0.875rem',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));
export const Line = styled('hr')`
  border: none;
  height: 1px;
  color: #000;
  background-color: #000;
  margin: 20px 0;
`;

export const CategoryButton = styled(Button)`
  padding: 10px 20px;
  min-width: fit-content;
  margin: 10px;
  min-height: 40px;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin: 6px;
  }
`;

export const CategoryContainer = styled('div')`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;
