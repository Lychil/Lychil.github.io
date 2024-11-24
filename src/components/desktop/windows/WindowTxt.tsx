import styled from "styled-components";
import { border, colors } from "../../../common/styles/styleConstants";
import { defaultScroll } from "../../../common/styles/mixins";
import WindowHeader from "./WindowHeader";
import { ReactElement } from "react";


const Wrapper = styled('div')`
height: 500px;
width: 350px;
display: flex;
flex-direction: column;
border: ${border.style.blackSmall};
background-color: ${colors.white};
`;

const Inner = styled('span')`
flex-grow: 1;
padding: 5px;
overflow-y: scroll;
${defaultScroll}
`;

interface WindowTxtProps {
    title: string,
    content?: ReactElement | string,
    close: () => void,
    move: () => void
}

export default function WindowTxt({title, content, move, close}: WindowTxtProps) {
    return (
        <Wrapper>
            <WindowHeader title={title} close={close} move={move} />
            <Inner>
                {content}
            </Inner>
        </Wrapper>
    )
}
