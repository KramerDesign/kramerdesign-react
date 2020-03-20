import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile2_T = (props: Props) => {
 
    return (
        <Tile2Styling>
            <div> Hello Tile2 Component </div>
        </ Tile2Styling>
    );
}
 
const Tile2Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 