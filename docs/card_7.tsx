import * as React from 'react'
import * as Img from '~/src/assets'
import * as Card from '~/src/client/styles'
import styled from 'styled-components'

export class Card_7 extends React.Component {
  render() {
    return (
      <>
        {/* <Box1>
          Hi 1
          <Box2>
            Hi 2
            <Box3>
              Hi 3<Box4>Hi 4</Box4>
            </Box3>
          </Box2>
        </Box1> */}
        <Box1>Hi 1</Box1>
        <Box2>Hi 2</Box2>
        <Box3>Hi 3</Box3>
        <Box4>Hi 4</Box4>
      </>
    )
  }
}

const Box1 = styled.div`
  width: 300px;
  height: 200px;
  background: green;
  position: absolute;
  z-index: 1;
`
const Box2 = styled.div`
  width: 300px;
  height: 300px;
  background: yellow;
  position: absolute;
  z-index: -1;
`
const Box3 = styled.div`
  width: 400px;
  height: 300px;
  background: blue;
  position: absolute;
  z-index: 3;
`
const Box4 = styled.div`
  width: 600px;
  height: 200px;
  background: red;
  position: absolute;
  z-index: 2;
`
