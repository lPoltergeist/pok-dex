import { createGlobalStyle } from "styled-components";
import bg from '../assets/bgimg.jpg'

export default createGlobalStyle`
    body{
        background: url(${bg}) no-repeat center center fixed;
        -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
        
    }

  
`
