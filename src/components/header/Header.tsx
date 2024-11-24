import styled from "styled-components"
import { colors, font } from "../../common/styles/styleConstants";
import Settings from "./Settings";

const Wrapper = styled('div')`
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
background-color: ${colors.black};
color: ${colors.white};
`;

const Banner = styled('p')``;

const Title = styled('h1')`
font-size: ${font.size.title};
letter-spacing: 2px;
`;

export default function Header() {
    return (
        <Wrapper>
            <Title>Shavrov Yaroslav</Title>
            <Banner>The portfolio of Shavrov Yaroslav</Banner>
            <Settings />
        </Wrapper>
    )
}
