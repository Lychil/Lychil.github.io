import FolderIcon from "../../components/files/FolderIcon";
import { IFolder } from "../types/types";

const works: IFolder[] = [
    {
        folder: "folder",
        title: "work_1",
        content: <></>
    },
    {
        folder: "folder",
        title: "work_2",
        content: <></>
    },
    {
        folder: "folder",
        title: "work_3",
        content: <></>
    }
]

export const worksList = works.map((elem) => <FolderIcon item={elem} />);
