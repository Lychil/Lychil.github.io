import styled from "styled-components";
import { ReactElement, useEffect, useState } from "react";
import { IFile } from "../../../common/types/types";
import WindowTxt from "./WindowTxt";
import WindowFolder from "./WindowFolder";

const Wrapper = styled('div') <{ $coord: { top: number, left: number } }>`
position: absolute;
top: ${props => props.$coord.top}px;
left: ${props => props.$coord.left}px;
`;

interface MoveWindowProps {
    type: IFile | string,
    title: string,
    content: ReactElement,
    close: () => void,
}

export default function MoveWindow({type, title, content, close}: MoveWindowProps) {
    const [position, setPosition] = useState({ left: 100, top: 100 });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    left: e.clientX,
                    top: e.clientY
                });
            }
        };

        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const children = (type: IFile | string) => {
        switch (type) {
            case "txt":
                return <WindowTxt title={title} move={handleMouseDown} close={close} />
            case "folder":
                return <WindowFolder title={title} content={content} close={close} move={handleMouseDown} />
            default:
                return;
        }
    }

    return (
        <Wrapper $coord={position}>
            {children(type)}
        </Wrapper>
    )
}
