import React from 'react'
import styled from 'styled-components';
import SingleCard from './SingleCard';
import mernstack from "../Assets/mern-stack.png";
import mern2 from "../Assets/mern2.png";
import mern3 from "../Assets/mern3.png";
import mern4 from "../Assets/mern4.png";

const AllCards = () => {
  return (
    <div>
        <Container>
            <h1>View My Stacks</h1>
            <h3>Check out the Stacks i use to be a Global Talent!</h3>
            <p>
            MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MERN Stack is a compilation of four different technologies that work together to develop dynamic web apps and websites.
            </p>
            <Wrap>
                <SingleCard description= " MongoDB, a NoSQL database management system"  stacks='MONGODB' img={mernstack}/>
                <SingleCard description = "ExpressJS, a backend web application framework for NodeJS."  stacks='EXPRESS' img={mern2}/>
                <SingleCard description= "ReactJS, a JavaScript library for developing UIs based on UI components"  stacks='REACT' img={mern3} />
                <SingleCard description= "  NodeJS, a JS runtime environment, it enables running JavaScript code outside the browser"  stacks='NODE' img={mern4} />
            </Wrap>
        </Container>
    </div>
  )
}

export default AllCards;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Wrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;