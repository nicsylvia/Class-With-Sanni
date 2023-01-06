import React from 'react';
import styled from 'styled-components';
import bukky from "../Assets/bukky.jpg";

interface Iprops{
    stacks: string;
    description: string;
    img: string;
}

const SingleCard: React.FC<Iprops> = ({stacks, description, img}) => {
  return (
    <div>
        <Container>
            <Card>
                <Image src={img} />
                <Hover>
                    {description}
                </Hover>
            </Card>
            <p>{stacks}</p>
        </Container>
    </div>
  )
}

export default SingleCard;

const Hover = styled.div`
    position: absolute;
    top: 0;
    width: 100% ;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        rgba(65, 73, 73, 1) 0%,
        rgba(253, 45, 45, 0) 100%
    );
    opacity: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 17px;
    transition: all 350ms;
    :hover{
        opacity: 1;
        transform: scale(1.01);
    }

`

const Image = styled.img`
    width: 100%;
    object-fit: contain;
    height: 100%;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-weight: bold;
        margin: 0;
    }
    padding-bottom: 10px;
`;

const Card = styled.div`
    width: 280px;
    height: 400px;
    position: relative;
    border-radius: 8px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 20px;
    /* background-blend-mode: overlay; */
    cursor: pointer;
    background-color: skyblue;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;