import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile12_T = (props: Props) => {
 
    return (
        <Tile12Styling>
            <div> Hello Tile12 Component </div>
        </ Tile12Styling>
    );
}
 
const Tile12Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 