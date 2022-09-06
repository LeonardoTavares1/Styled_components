import styled from "styled-components";
import { secundary, vinho } from "../../styles/colors.jsx";


const Header = styled.header`

    width: 70%;

    border-radius: 3rem;

    background: ${secundary};
    box-shadow: 3px 4px 5px 6px rgba(0,0,0,0.82);

    padding: 2rem;
    color: white;

`;

const Titulo = styled.h1`

    font-size: 2rem;

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



`;

export {Header, Titulo, CampoTexto}