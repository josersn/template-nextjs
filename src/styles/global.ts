import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default Global;