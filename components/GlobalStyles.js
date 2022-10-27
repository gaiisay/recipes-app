import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
  line-height: 1.75;
  font-size: 1.1em;
  color: #9F8772;
}

main {
  display: grid;
  justify-content: center;
  padding: 1rem;
  background-color: #EDE4E0;
}

img {
    width: 100%;
    height: 100%;
}
`;

export { GlobalStyles };
