
import { AppBar, MenuItem, Toolbar, Dialog, DialogTitle, DialogContent, Typography, Box, IconButton, styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Importando um ícone de exemplo
import { useState } from 'react';

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
  flex: '1 1 calc(33.333% - 16px)', // Flex-grow, flex-shrink, and flex-basis
  margin: theme.spacing(1), // Espaçamento entre caixas
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
  'MONGODB',
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
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
              <Typography variant="h6" gutterBottom>Minhas Habilidades</Typography>
              {skills.map((skill, index) => (
                <SkillBox key={index}>
                  <Typography variant="body2">{skill}</Typography>
                </SkillBox>
              ))}
            </Box>
          )}
          {dialogContent.title === 'Projetos' && (
            <Typography>{dialogContent.content}</Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavBar;



