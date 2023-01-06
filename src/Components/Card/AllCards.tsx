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
            <p>Check out the Stacks i use to be a Global Talent!</p>
            <Wrap>
                <SingleCard description= "#00800099"  stacks='MONGODB' img={mernstack}/>
                <SingleCard description = "#ff00003e"  stacks='EXPRESS' img={mern2}/>
                <SingleCard description= "#00000084"  stacks='REACT' img={mern3} />
                <SingleCard description= " #ffff0058"  stacks='NODE' img={mern4} />
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