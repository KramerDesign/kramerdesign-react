import React from 'react'

import styled from 'styled-components'
import {Tile1_T, Tile6_T} from './tiles'
 
type Props = {}

export const TilesView = (props: Props) => { 
    return (
      <div>
        <TilesViewContainer>
          <Tile1Styling> 
            <Tile1>
                <Tile1_T/>
            </Tile1>
          </Tile1Styling>

          <Tile2Styling> 
            <Tile2>
              Tile2
            </Tile2>
          </Tile2Styling>

          <Tile3Styling> 
            <Tile3>
              Tile3
            </Tile3>
          </Tile3Styling>

          <Tile4Styling> 
            <Tile4>
              Tile4
            </Tile4>
          </Tile4Styling>

          <Tile5Styling> 
            <Tile5>
              Tile5
            </Tile5>
          </Tile5Styling>

          <Tile6Styling> 
            <Tile6>
              <Tile6_T/>
            </Tile6>
          </Tile6Styling>

          <Tile7Styling> 
            <Tile7>
              Tile7
            </Tile7>
          </Tile7Styling>

          <Tile8Styling> 
            <Tile8>
              Tile8
            </Tile8>
          </Tile8Styling>
        </TilesViewContainer>
      </div>
    )
}

const TilesViewContainer = styled.div`
  display:grid;
  grid-template-columns: fr fr fr fr fr fr fr fr fr fr fr fr;
  // grid-template-rows: fr fr fr fr fr fr fr fr fr fr fr fr;
  grid-template-areas: 
    "T1 T1 T1 T1 T2 T2 T2 T2 T2 T2 T2 T2"
    "T3 T3 T3 T3 T3 T3 T3 T3 T3 T3 T3 T3"
    "T3 T3 T3 T3 T3 T3 T3 T3 T3 T3 T3 T3"
    "T6 T6 T4 T4 T4 T4 T4 T4 T4 T4 T4 T4"
    "T6 T6 T5 T5 T5 T5 T5 T5 T5 T5 T5 T5"
    "T7 T7 T7 T7 T7 T7 T7 T7 T7 T7 T7 T7"
    "T7 T7 T7 T7 T7 T7 T7 T7 T7 T7 T7 T7"
    "T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8";
    "T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8";
    "T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8";
    "T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8 T8";


  grid-gap: 20px;
  border: solid red 6px;
  background: pink;
`

const Tile1Styling = styled.div`
  grid-area: T1;
  border-radius: 10px;
  background-color: lightblue;

`
const Tile1 = styled.div `
  background-color: peachpuff;
  border-radius: 10px;
  
`
const Tile2Styling = styled.div`
  grid-area: T2;
  border-radius: 10px;
  background-color: lightblue;

`
const Tile2 = styled.div `
    background-color: pink;
    
`
const Tile3Styling = styled.div`
  grid-area: T3;
  border-radius: 10px;
  background-color: violet;

`
const Tile3 = styled.div `
    height:40px;
`
const Tile4Styling = styled.div`
  grid-area: T4;
  border-radius: 10px;
  background-color: lightblue;

`
const Tile4 = styled.div `
    //
`
const Tile5Styling = styled.div`
  grid-area: T5;
  border-radius: 10px;
  background-color: lightblue;

`
const Tile5 = styled.div `
    //
`
const Tile6Styling = styled.div`
  grid-area: T6;
  border-radius: 10px;
  background-color: lightblue;


`
const Tile6 = styled.div `
    //
`
const Tile7Styling = styled.div`
  grid-area: T7;
  border-radius: 10px;
  background-color: lightblue;

`
const Tile7 = styled.div `
    //
`
const Tile8Styling = styled.div`
  grid-area: T8;
  border-radius: 10px;
  background-color: lightblue;

`
const Tile8 = styled.div `
    //
`