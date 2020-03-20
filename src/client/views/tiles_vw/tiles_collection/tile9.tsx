import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile9_T = (props: Props) => {
 
    return (
        <Tile9Styling>
            <div> Hello Tile9 Component </div>
        </ Tile9Styling>
    );
}
 
const Tile9Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 