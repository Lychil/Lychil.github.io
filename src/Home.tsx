import styled from "styled-components";
import Header from "./components/header/Header";
import Desktop from "./components/desktop/Desktop";


const Wrapper = styled('div')`
display: flex;
flex-direction: column;
height: 100vh;
overflow: hidden;
`;

export default function Home() {
    return (
        <Wrapper>
            <Header />
            <Desktop />
        </Wrapper>
    )
}
