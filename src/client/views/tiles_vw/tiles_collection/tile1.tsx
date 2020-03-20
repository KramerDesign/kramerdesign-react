import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile1_T = (props: Props) => {
 
    return (
        <Tile1Styling>
            <div> Hello Tile1 Component </div>
        </ Tile1Styling>
    );
}
 
const Tile1Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 