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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows:repeat(6, 1fr);
  grid-auto-rows:200px;
  grid-gap: 20px;
//   align-items: center;
justify-content:space-evenly;
      
`

const TileStyling = styled.div`
  width: 300px;
  height: 300px;

`

const TileArea1 = styled.div `
//     grid-area: T1;
      display:grid;
      grid-column: 1/1;
`
const TileArea2 = styled.div `
//     grid-area: T2;
display:grid;
grid-column: 2/3;

`
const TileArea3 = styled.div `
display:grid;
grid-column: 3/4;
`
const TileArea4 = styled.div `
display:grid;
grid-column: 4/5;
`

