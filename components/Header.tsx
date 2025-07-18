import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Mary.dev
        </Typography>
        <Box>
          {['Home', 'Projetos', 'Sobre', 'Contato'].map((text) => (
            <Button key={text} href={`#${text.toLowerCase()}`} sx={{ color: 'white' }}>
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
