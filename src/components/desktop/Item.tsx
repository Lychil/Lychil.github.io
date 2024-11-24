import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import { IFolder, ITxt } from "../../common/types/types";
import TxtFileIcon from "../files/TxtFileIcon";
import FolderIcon from "../files/FolderIcon";

const Wrapper = styled('div')``;

const EmptyItem = styled('div')`
width: 100px;
height: 100px;
`;

const ItemType = 'ITEM';

interface ItemProps {
    item: null | IFolder | ITxt,
    index: number,
    moveTask: (i1: number, i2: number) => void
}

const Item = ({ item, index, moveTask }: ItemProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(index);
    const [, ref] = useDrag({
        type: ItemType,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover(item: any) {
            if (item.index !== index) {
                setCurrentIndex(item.index)
            }
        },
        drop() {
            moveTask(currentIndex, index);
        },
    });

    return (
        <>
            {item ?
                <Wrapper ref={(node) => ref(drop(node))}>
                    {"txt" in item ? <TxtFileIcon item={item} /> : <FolderIcon item={item} />}
                </Wrapper>
                :
                <EmptyItem ref={(node) => ref(drop(node))}></EmptyItem>
            }
        </>
    );
};

export default Item;