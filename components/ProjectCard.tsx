import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  deployLink: string;
  githubLink: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  deployLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card sx={{ bgcolor: 'grey.900' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Stack: {stack}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={deployLink} color="primary">Deploy</Button>
        <Button size="small" href={githubLink} color="secondary">GitHub</Button>
      </CardActions>
    </Card>
  );
}
