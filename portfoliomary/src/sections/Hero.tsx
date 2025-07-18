import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Container
      id="home"
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
        Olá, eu sou Mary
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Desenvolvedora Fullstack apaixonada por resolver problemas com código.
      </Typography>
      <Typography variant="body1" color="success.main" gutterBottom>
        Next.js, React, Node.js, PostgreSQL
      </Typography>

      <Box
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        sx={{ display: 'flex', gap: 2, mt: 2 }}
      >
        <Button variant="contained" color="primary" href="#projetos">
          Ver meus projetos
        </Button>
        <Button variant="outlined" color="secondary" href="/cv.pdf">
          Baixar CV
        </Button>
      </Box>
    </Container>
  );
}
