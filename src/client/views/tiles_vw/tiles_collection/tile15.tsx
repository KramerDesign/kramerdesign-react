import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile15_T = (props: Props) => {
 
    return (
        <Tilee15Styling>
            <div> Hello Tile15 Component </div>
        </ Tilee15Styling>
    );
}
 
const Tilee15Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 