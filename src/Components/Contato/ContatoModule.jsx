import styled from "styled-components";

export const Container = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
`
export const Dados = styled.ul`
list-style: none;
`

export const List = styled.li`
font-size: 1.2rem;
font-family: Arial, Helvetica, sans-serif;
margin-bottom: 0.8rem;
&::before{
   content: '';
   display: inline-block;
   width: 20px;
   height: 2px;
   background-color: pink;
   margin-right: 10px;
}
`

export const Box = styled.div`
border: 1px solid pink;
border-radius: 10px;
`