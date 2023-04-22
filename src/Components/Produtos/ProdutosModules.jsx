import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns:  repeat(3, 1fr);
gap: 2rem;

@media screen and (max-width:750px){
   grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:560px){
   grid-template-columns: 1fr;
}

`

export const Title = styled.h1`
text-align: center;
`
