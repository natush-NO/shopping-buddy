import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: none;

  box-sizing: border-box;
}
*::before,
*::after {
  display: inline-block;
}
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
html {
  font-size: 10px;
}
body {
  line-height: 1;
  height: 100%;
  font-family: system-ui;
  margin: 180px 0 0 0;
  background-image: url('/images/background_image.webp');
}

body::after {
  content: ""; 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2); 
  z-index: -1; 
}
`;
