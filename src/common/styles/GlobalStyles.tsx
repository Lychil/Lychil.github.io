import { createGlobalStyle } from "styled-components";
import { colors } from "../styles/styleConstants";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Jaro", sans-serif;
    font-weight: 400;
    background-color: ${colors.background};
    color: ${colors.black};
    overflow: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}
`;