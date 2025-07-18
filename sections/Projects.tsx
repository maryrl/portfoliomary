import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Kanban Board',
    description: 'Aplicação para gerenciar tarefas com Kanban.',
    stack: 'Next.js, Node.js',
    deployLink: 'https://kanban-demo.vercel.app',
    githubLink: 'https://github.com/maryrl/kanban',
  },
  {
    id: 2,
    title: 'Certificação Digital',
    description: 'Sistema de geração e validação de certificados digitais.',
    stack: 'React, Prisma, PostgreSQL',
    deployLink: 'https://certificados-demo.vercel.app',
    githubLink: 'https://github.com/maryrl/certificados',
  },
];

export default function Projects() {
  return (
    <Container component="section" id="projetos" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projetos
      </Typography>
      <Grid container spacing={4}>
        {projectsData.map((project) => (
          <Grid
            item // essencial para o Grid funcionar como grid item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            component="div" // opcional, pode remover se quiser div padrão do Grid
          >
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
