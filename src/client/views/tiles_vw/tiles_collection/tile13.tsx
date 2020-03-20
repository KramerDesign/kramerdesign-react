import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile13_T = (props: Props) => {
 
    return (
        <Tile13Styling>
            <div> Hello Tile13 Component </div>
        </ Tile13Styling>
    );
}
 
const Tile13Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 