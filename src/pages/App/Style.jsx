
import styled from "styled-components";
import { backgroud } from "../../styles/colors.jsx";

const Page = styled.div`

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`;
const Container = styled.div`

    height: 70%;
    width: 50%;
    background: ${backgroud};
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.22);
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    

`;

export { Container, Page }