import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile3_T = (props: Props) => {
 
    return (
        <Tile3Styling>
            <div> Hello Tile3 Component </div>
        </ Tile3Styling>
    );
}
 
const Tile3Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 