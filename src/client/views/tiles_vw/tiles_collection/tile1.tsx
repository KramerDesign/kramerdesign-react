import React from 'react'
import styled from 'styled-components'
import * as Img from '~/src/assets'
 
type Props = { }
 
 
export const Tile1_T = (props: Props) => {
 
    return (
        <Tile1Styling 
            src={Img.Tile1Img}
            alt ="Image of Lipstick writing on mirror"
            title ="Bye"
        />
    );
}
 
const Tile1Styling = styled.img`
    border: solid black 2px;
    border-radius: 50%;
    width:100%;
    height:auto;
`
 