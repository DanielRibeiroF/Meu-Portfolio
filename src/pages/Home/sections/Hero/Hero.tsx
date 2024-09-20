import { Box, Container, styled, Typography, } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/Images/Avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AnimatedBackground } from "../../../../components/AnimatedBackgorund/AnimetedBackground";
import StyledButton from "../../../../components/StyledButton/StyledButton";


const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.up ('xs')]: { // <= mobile
            paddingTop:"100px"

        },
        [theme.breakpoints.up ('md')]: { // >==mobile
            paddingTop:"0"

        }


    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.primary.contrastText}`,
    }))
    const handleEmailClick = () => {
        // Substitua com seu endereço de e-mail, assunto e corpo do e-mail
        const email = 'danielferreirar327@gmail.com';
        const subject = 'Assunto do E-mail';
        const body = 'Corpo do e-mail';
    
        // Codifica os parâmetros para garantir que eles sejam interpretados corretamente
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink;
      };

      const handleClick = () => {
        // URL modificada para download direto
        const drivePdfUrl = 'https://drive.google.com/file/d/1DZ26G-w86bZvWnib9TK4C50ZV_CXNcZY/view?usp=sharing';
    
        // Abrir o PDF em uma nova aba para iniciar o download
        window.open(drivePdfUrl, '_blank');
      };

    return (
        <>

            <StyledHero>
                <Container maxWidth="lg">

                    <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>

                        </Box>     
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Daniel Ribeiro</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Programador</Typography>
                            <Grid container display="flex"  justifyContent="center" spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                        <StyledButton onClick={handleClick}>
                                        <DownloadIcon />
                                        <Typography>
                                            
                                        Download CV
                                        </Typography>
                                            
                                        </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }}>
                                    <StyledButton onClick={handleEmailClick}>
                                        <MailOutlineIcon />
                                         <Typography>
                                         Me contate
                                         </Typography>
                                        </StyledButton >
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero