import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile10_T = (props: Props) => {
 
    return (
        <Tile10Styling>
            <div> Hello Tile10 Component </div>
        </ Tile10Styling>
    );
}
 
const Tile10Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 