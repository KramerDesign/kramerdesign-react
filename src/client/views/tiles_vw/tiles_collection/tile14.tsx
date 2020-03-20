import React from 'react'
import styled from 'styled-components'
 
type Props = { }
 
 
export const Tile14_T = (props: Props) => {
 
    return (
        <Tile14Styling>
            <div> Hello Tile14 Component </div>
        </ Tile14Styling>
    );
}
 
const Tile14Styling = styled.div`
    color: red;
    height:100px;
    background-color: blue;

`
 