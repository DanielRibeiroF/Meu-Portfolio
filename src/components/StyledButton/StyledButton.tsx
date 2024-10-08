import {  styled } from "@mui/material"
import { ReactNode } from "react"



interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}
//Essa INTERFACE E STYLED, BUTTONPROPS É NECESSSARIO DEFINIR CHAMANDO A CHILDREN DENTRO DA INTERFACE PARA CONSEGUIR COLOCAR O BOTÃO DENTRO DO HERO E DAQUI E UTILIZAR ELE

const StyledButton: React.FC<StyledButtonProps> =({children, onClick }) => {


    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border:`1px solid ${theme.palette.primary.contrastText}`,
        borderRadius:"3px",
        padding: "5px 15px",
        width:"100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }


    }))

    return (
      <>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
      </>
    )
  }
  
  export default StyledButton