import styled from "styled-components";
import List from "./List";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled('div')`
flex-grow: 1;
padding: 20px;
`;

export default function Desktop() {
    const blockRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<number>(0);

    useEffect(() => {
        if (blockRef.current) {
            const height = blockRef.current.getBoundingClientRect().height - 40;
            const width = blockRef.current.getBoundingClientRect().width - 40;
            setSize(Math.floor((height / 105)) * Math.floor((width / 105)));
        }
    }, [blockRef.current])

    return (
        <Wrapper ref={blockRef}>
            {size !== 0 && <List size={size} />}
        </Wrapper>
    )
}
