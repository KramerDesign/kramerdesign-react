import React from 'react'

import styled from 'styled-components'
import * as T from './tiles_collection'
 
type Props = {}

export const TilesView = (props: Props) => { 
    return (
      <div>
        <TilesViewContainer>

            <TileArea1>
          <TileStyling> 
                <T.Tile1_T/>
          </TileStyling>
            </TileArea1>

          <TileArea2>
          <TileStyling> 
                <T.Tile2_T/>
          </TileStyling>
          </TileArea2>

          <TileArea3>
          <TileStyling> 
                <T.Tile3_T/>
          </TileStyling>
          </TileArea3>

          <TileArea4>
          <TileStyling> 
                <T.Tile4_T/>
          </TileStyling>
          </TileArea4>

          <TileStyling> 
                <T.Tile5_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile6_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile7_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile8_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile9_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile10_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile11_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile12_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile13_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile14_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile15_T/>
          </TileStyling>

          <TileStyling> 
                <T.Tile16_T/>
          </TileStyling>

        </TilesViewContainer>

        
      </div>
    )
}

const TilesViewContainer = styled.div`
  display:grid;
  grid-template-columns: fr fr fr fr;
  grid-template-areas: 
    "T1 T2 T3 T4"
    "T5 T6 T7 T8"
    "T9 T10 T11 T12"
    "T13 T14 T15 T16"

  grid-gap: 20px;
  border: solid red 6px;
  background: pink;
`

const TileStyling = styled.div`
  border-radius: 10px;
  background-color: lightblue;
  border: solid red 3px;
`

const TileArea1 = styled.div `
    grid-area: T1;
`
const TileArea2 = styled.div `
    grid-area: T2;
`
const TileArea3 = styled.div `
    grid-area: T3;
`
const TileArea4 = styled.div `
    grid-area: T4;
`

