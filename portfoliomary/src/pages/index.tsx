import { Button, Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 3,
        py: 8,
      }}
    >
      <Typography variant="h2" component="h1" fontWeight="bold">
        Olá, eu sou Maria Rodrigues
      </Typography>

      <Typography variant="h6" color="text.secondary">
        Desenvolvedora Fullstack apaixonada por resolver problemas com código.
      </Typography>

      <Typography variant="body1" sx={{ color: 'success.main' }}>
        Next.js, React, Node.js, PostgreSQL — Foco em soluções robustas e responsivas.
      </Typography>

      <Box
        component={motion.div}
        whileHover={{ scale: 1.05 }}
        sx={{ display: 'flex', gap: 2, mt: 2 }}
      >
        <Button variant="contained" color="primary" href="#projects">
          Ver meus projetos
        </Button>

        <Button variant="outlined" color="secondary" href="/cv.pdf">
          Baixar CV
        </Button>
      </Box>
    </Container>
  );
}
