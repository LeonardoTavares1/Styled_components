import { Crud } from "../../Components/Crud/Crud.jsx";
import { Container, Page } from "./Style.jsx";

export function App(){
    return(
        <>
            <Page>
                <Container>
                    <Crud />
                </Container>
            </Page>      
        </>
    )
}