import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile6_T = (props: Props) => {
 
    return (
        <Tile6Styling>
            <div> Hello Tile6 Component </div>
        </ Tile6Styling>
    );
}
 
const Tile6Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 