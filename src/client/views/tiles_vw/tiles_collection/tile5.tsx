import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile5_T = (props: Props) => {
 
    return (
        <Tile5Styling>
            <div> Hello Tile5 Component </div>
        </ Tile5Styling>
    );
}
 
const Tile5Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 