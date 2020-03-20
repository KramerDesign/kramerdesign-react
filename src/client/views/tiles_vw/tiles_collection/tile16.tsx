import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile16_T = (props: Props) => {
 
    return (
        <Tile16Styling>
            <div> Hello Tile16 Component </div>
        </ Tile16Styling>
    );
}
 
const Tile16Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 