import styled from "styled-components";
import { colors } from "./styleConstants";

export const WrapperFileIcon = styled('div')`
padding: 5px;
text-align: center;
width: 100px;
height: 100px;
transition: all 0.2s;

&:hover {
    background: ${colors.highlighting};
}
`;

export const FileIconImg = styled('img')`
margin-bottom: 4px;
`;

export const FileName = styled('p')``;