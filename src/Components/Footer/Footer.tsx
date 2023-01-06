import React, {useState} from 'react'
import styled from 'styled-components';
import { BsArrowUpSquare, BsBoxArrowDown } from "react-icons/bs";
import { Link } from 'react-scroll';


export const Footer = () => {
    const [arrowChange, setarrowChange] = useState(true)
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
         <ArrowToTop to='Hero' smooth = "true">
            {
                arrowChange ?  <BsArrowUpSquare /> :  <BsBoxArrowDown />
            }
        </ArrowToTop> 
    </Container>
  )
}

const ArrowToTop = styled(Link)`
    color: black;
    position: fixed;
    right: 60px;
    font-size: 50px;
    bottom: 25px;
    cursor: pointer;
    transition: all 350ms;
    :hover{
        transform: scale(1.10);
    }
`;
const Container = styled.div`
width: 100%;
padding-top: 30px;
flex-wrap: wrap;
background-color: skyblue;
position: relative;
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
background-color: #0000ff40;
height: 40px;
`