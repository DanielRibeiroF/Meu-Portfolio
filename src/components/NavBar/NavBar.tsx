import React, { useState } from 'react';
import { AppBar, MenuItem, Toolbar, Dialog, DialogTitle, DialogContent, Typography, Box, Grid, IconButton, styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Importando um ícone de exemplo

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundColor: theme.palette.primary.main,
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Alinha os itens verticalmente
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.contrastText,
  textAlign: 'center', // Centraliza o texto
}));

const SkillBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  boxShadow: theme.shadows[1],
  textAlign: 'center',
}));

const skills = [
  'CSS',
  'HTML',
  'JAVASCRIPT',
  'REACT',
  'NODEJS',
  'TYPESCRIPT',
  'PYTHON',
  'DJANGO',
  'MYSQL',
  'MANGODB',
  'C',
  'ANGULAR'
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: '' });

  const handleClickOpen = (title: string, content: string) => {
    setDialogContent({ title, content });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProjectsClick = () => {
    window.open('https://github.com/DanielRibeiroF', '_blank'); // Substitua com o URL desejado
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem onClick={() => handleClickOpen('Formação', 'Análise e Desenvolvimento de Sistemas')}>
            Sobre mim
          </MenuItem>
          <MenuItem onClick={() => handleClickOpen('Habilidades', '')}>
            Habilidades
          </MenuItem>
          <MenuItem onClick={handleProjectsClick}>
            Projetos
          </MenuItem>
        </StyledToolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent dividers style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {dialogContent.title === 'Formação' && (
            <InfoBox>
              <IconButton color="primary" style={{ fontSize: '40px' }}>
                <SchoolIcon />
              </IconButton>
              <Typography variant="body1" style={{ marginTop: '16px' }}>
                {dialogContent.content}
              </Typography>
            </InfoBox>
          )}
          {dialogContent.title === 'Habilidades' && (
            <Box>
              <Typography variant="h6" gutterBottom>Minhas Habilidades</Typography>
              <Grid container spacing={2}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <SkillBox>
                      <Typography variant="body2">{skill}</Typography>
                    </SkillBox>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {dialogContent.title === 'Projetos' && (
            <Typography>Conteúdo de Projetos.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavBar;



