import styled from "styled-components";
import { secundary, vinho } from "../../styles/colors.jsx";


const Header = styled.header`

    align-items: center;
    width: 100%;
    
    display: flex;
    margin-top: 5%;
    justify-content: space-between;
    

    background: ${secundary};
    box-shadow: 3px 4px 5px 6px rgba(0,0,0,0.82);

    padding: 2rem;

`;

const Titulo = styled.h1`

    font-size: 2rem;
    color: white;

`;

const Divisinha = styled.div`

    gap: 1rem;

    display: flex;
    align-items: center;

`;

const CampoTexto = styled.input`

    width: 70%;
    height: 10%;

    padding: 2rem;

    border: none;
    border-radius: 1rem;

    ::placeholder{
        color: ${vinho};
    }

`;

const Botao = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
    border: none;

`;

export {Header, Titulo, CampoTexto, Botao, Divisinha}