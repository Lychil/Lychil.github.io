import styled from "styled-components"
import { font } from "../../common/styles/styleConstants";
import { useEffect, useLayoutEffect, useState } from "react";

const Wrapper = styled('div')`
display: flex;
column-gap: 10px;
align-items: center;
font-size: ${font.size.header};
`;

const LanguageSwaper = styled('div')``;

const DateTime = styled('div')`
text-align: center;
`;

const TimeWrapper = styled('div')``;

const DateWrapper = styled('div')``;

export default function Settings() {
    const [time, setTime] = useState<string>();
    const [date, setDate] = useState<string>();

    useLayoutEffect(() => {
        const updateTime = () => {
            const date = new Date();
            setTime(
                `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
            );
            setDate(
                `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}.${date.getFullYear()}`
            );
        };
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <Wrapper>
            <LanguageSwaper>eng</LanguageSwaper>
            <DateTime>
                <TimeWrapper>{time}</TimeWrapper>
                <DateWrapper>{date}</DateWrapper>
            </DateTime>
        </Wrapper>
    )
}
