import styled, { css } from 'styled-components';

export const Section = styled.div`
    
   
     
     


`

export const Search = styled.div`
  z-index: 0;   
  

 img {
    width: 50px; 
    margin-top: 10px;
 }
`

export const Title = styled.h1`
color: #f5eeee;
font-size: 48px;
text-align: center;

`

export const Form = styled.form`
text-align: center;
input {

height: 25px;
padding: 0 24px;
border: 0;
border-radius: 5px 0 0 5px;
outline: 0;
}

button {
    height: 25px;
    border: 0;
    color: #FFF;
    background: #B90101;
    border-radius: 0 5px 5px 0;

    transition: filter 0.5s;

    &:hover {
       filter: brightness(0.8);
       color: #FFF;
    }
}

`
    
export const Pokemons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;


background-color: rgba(228,228,228,0.6);



img {
    height: 15rem;
    background: white;
    border-radius: 50%;
    margin-top: 15px;
 margin-bottom:15px;
}

div {
    display: flex;
flex-direction: column;

}

`

export const Info = styled.div`
font-size: 1.5rem;
line-height: 2rem;

height: 8.5rem;
width: 11rem;
border-radius: 5px;
margin-left: 2.5rem;

}

 }
`
    

    
