import { Fragment, ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 5px;
`;

interface FilesListProps {
    items: ReactElement[]
}

export default function FilesList({items}: FilesListProps) {
    return (
        <Wrapper>
            {
                items.map((elem, i) => <Fragment key={i}>{elem}</Fragment>)
            }
        </Wrapper>
    )
}
