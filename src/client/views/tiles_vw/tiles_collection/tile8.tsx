import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile8_T = (props: Props) => {
 
    return (
        <Tile8Styling>
            <div> Hello Tile8 Component </div>
        </ Tile8Styling>
    );
}
 
const Tile8Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 