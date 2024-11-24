import styled from 'styled-components';
import { border, colors } from '../../../common/styles/styleConstants';
import { lockHighlighting } from '../../../common/styles/mixins';
import closeImg from "../../../common/images/svg/close.svg";

const Wrapper = styled('div')`
display: flex;
column-gap: 10px;
height: 30px;
padding: 5px;
color: ${colors.white};
border: ${border.style.greySmall};
background-color: ${colors.black};
${lockHighlighting}
`;

const Title = styled('p')``;

const CloseBtn = styled('img')`
cursor: pointer;
height: 100%;
aspect-ratio: 1;
`;

interface WindowHeaderProps {
    title: string,
    close: () => void,
    move: () => void
}

export default function WindowHeader({close, title, move}: WindowHeaderProps) {
    return (
        <Wrapper onMouseDown={move}>
            <CloseBtn onClick={close} src={closeImg} alt='close button'/>
            <Title>{title}</Title>
        </Wrapper>
    )
}
