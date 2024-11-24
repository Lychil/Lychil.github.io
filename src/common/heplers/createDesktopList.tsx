import FilesList from "../../components/files/FilesList";
import { worksList } from "../data/worksList";
import { IFolder, ITxt } from "../types/types";

const files: (IFolder | ITxt)[] = [
    {
        txt: "txt",
        title: "skills.txt",
        text: "My skills"
    },
    {
        folder: "folder",
        title: "works",
        content: <FilesList items={worksList} />
    },
    {
        txt: "txt",
        title: "about_me.txt",
        text: "About me"
    },
    {
        txt: "txt",
        title: "contacts.txt",
        text: "My contacts"
    }
]

export const createDesktopList = (size: number): (IFolder | ITxt | null)[] => {
    const result = [...files, ...Array.from({ length: size - files.length }, () => null)]
    return [...result];
}