import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile4_T = (props: Props) => {
 
    return (
        <Tile4Styling>
            <div> Hello Tile4 Component </div>
        </ Tile4Styling>
    );
}
 
const Tile4Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 