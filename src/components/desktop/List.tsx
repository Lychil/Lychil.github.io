import { useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import { createDesktopList } from "../../common/heplers/createDesktopList";

const Wrapper = styled('div')`
height: 100%;
display: flex;
flex-wrap: wrap;
gap: 5px;
overflow: hidden;
`;

const List = ({ size }: { size: number }) => {
    const [tasks, setTasks] = useState(createDesktopList(size));

    const moveTask = (fromIndex: number, toIndex: number) => {
        const updatedTasks = [...tasks];
        const past = updatedTasks[fromIndex];
        updatedTasks[fromIndex] = updatedTasks[toIndex];
        updatedTasks[toIndex] = past;
        setTasks(updatedTasks);
    };

    return (
        <Wrapper>
            {tasks.map((item, i) => (
                <Item key={i} index={i} item={item} moveTask={moveTask} />
            ))}
        </Wrapper>
    );
}

export default List;