import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 0.5px solid #6663;
    border-radius: 7px;
    &:hover {
        box-shadow: 2px 2px 3px 1px gray;
    }
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    
`


function Card(props){
    const { children, ...other } = props;

    return(
        <StyledCard style= {{...other}}>
            {children}
        </StyledCard>
    )
}

export default Card;