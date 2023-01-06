import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Wrap>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
            </Wrap>
            <Wrap>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
            </Wrap>
            <Wrap>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
            </Wrap>
            <Wrap>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
            </Wrap>
            <Wrap>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
            </Wrap>
            <Wrap>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
                <nav>hellow</nav>
            </Wrap>
         
        </Wrapper>
        <Last>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum 
        </Last>
    </Container>
  )
}


const Container = styled.div`
width: 100%;
padding-top: 30px;
flex-wrap: wrap;
background-color: black;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(6, 3fr);
justify-content: center;
align-items: center;


nav{
    font-weight: bold;
    color: white;
    font-size: 18px;

}
`
const Wrap = styled.div`
width: 80%;
`
const Last = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
background-color: green;
height: 40px;
`