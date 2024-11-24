import { ReactElement } from "react";

export interface ISocial {
    id: number,
    name: string,
    image: string,
    backgroundColor: string
}

export type FileType = "txt" | "folder";

export interface IFolder {
    folder: "folder"
    title: string,
    content: ReactElement
}

export interface ITxt {
    txt: "txt",
    title: string,
    text: string
}

export interface IFile {
    fileType: FileType,
    name: string,
    text?: string
}

export type DesktopItemType = "empty" | "file";