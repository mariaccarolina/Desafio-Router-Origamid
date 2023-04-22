import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:5px;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  
  a{
    text-decoration: none;
    color: black;
  }
  
  img{
    max-width: 100%;
    border-radius: 0.5rem;
  }`
