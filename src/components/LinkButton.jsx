/* eslint-disable max-len */
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

export default function LinkButton({ text, link, linkedin }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#221F1F'),
    backgroundColor: 'grey',
    width: '20px',
    '&:hover': {
      backgroundColor: 'green',
    },
  }));
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <ColorButton
        disabled={link ? false : true}
        variant="contained"
        startIcon={linkedin ? <LinkedIn /> : <GitHubIcon />}
      >
        {text}
      </ColorButton>
    </a>
  );
}
