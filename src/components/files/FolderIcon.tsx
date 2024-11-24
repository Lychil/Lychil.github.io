import { useState } from "react";
import { createPortal } from "react-dom";
import MoveWindow from "../desktop/windows/MoveWindow";
import { FileIconImg, FileName, WrapperFileIcon } from "../../common/styles/styles";
import folderImg from "../../common/images/svg/folder.svg";
import { IFolder } from "../../common/types/types";

interface FolderIconProps {
    item: IFolder
}

const portal = document.getElementById("portal");

export default function FolderIcon({ item }: FolderIconProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <WrapperFileIcon onClick={() => setOpen(true)}>
                <FileIconImg src={folderImg} alt='icon of folder' />
                <FileName>{item.title}</FileName>
            </WrapperFileIcon>
            {
                isOpen && createPortal(
                    <MoveWindow type="folder" content={item.content} title={item.title} close={() => setOpen(false)} />, portal!)
            }
        </>
    )
}
