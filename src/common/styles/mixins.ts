import { css } from "styled-components";
import { colors } from "./styleConstants";

export const lockHighlighting = css`
-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
`;

export const defaultScroll = css`
&::-webkit-scrollbar {
    width: 2px;
    color: ${colors.black};
}
`;