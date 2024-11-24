import { useState } from "react";
import { createPortal } from "react-dom";
import MoveWindow from "../desktop/windows/MoveWindow";
import { FileIconImg, FileName, WrapperFileIcon } from "../../common/styles/styles";
import txtImg from "../../common/images/svg/txt.svg";
import { ITxt } from "../../common/types/types";

interface TxtFileIconProps {
    item: ITxt
}

const portal = document.getElementById("portal");

export default function TxtFileIcon({ item }: TxtFileIconProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <WrapperFileIcon onClick={() => setOpen(true)}>
                <FileIconImg src={txtImg} alt="icon of txt file" />
                <FileName>{item.title}</FileName>
            </WrapperFileIcon>
            {
                isOpen && createPortal(
                    <MoveWindow type="txt" content={<>{item.text}</>} title={item.title} close={() => setOpen(false)} />
                    , portal!)
            }
        </>
    )
}
