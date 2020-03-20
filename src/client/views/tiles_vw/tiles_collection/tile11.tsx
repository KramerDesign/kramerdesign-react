import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile11_T = (props: Props) => {
 
    return (
        <Tile11Styling>
            <div> Hello Tile11 Component </div>
        </ Tile11Styling>
    );
}
 
const Tile11Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 