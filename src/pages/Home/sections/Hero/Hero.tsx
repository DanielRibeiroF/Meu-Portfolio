import { Box, Container, styled, Typography, } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/Images/Avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackgorund/AnimetedBackground";




const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display:"flex",
        alignItems:"center",


    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.primary.contrastText}`,
    }))

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
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Programmer</Typography>
                            <Grid container display="flex"  justifyContent="center" spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                        <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                        Download CV
                                        </Typography>
                                            
                                        </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }}>
                                    <StyledButton >
                                        <MailOutlineIcon />
                                         <Typography>
                                         Contact me
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