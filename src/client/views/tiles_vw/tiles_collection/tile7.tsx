import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile7_T = (props: Props) => {
 
    return (
        <Tile7Styling>
            <div> Hello Tile7 Component </div>
        </ Tile7Styling>
    );
}
 
const Tile7Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 