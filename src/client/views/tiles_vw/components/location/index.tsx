import * as React from 'react'

import styled from 'styled-components'
import * as Card from '~/src/client/styles'
import * as Img from '~/src/assets'


export class LocationCard extends React.Component {
  render() {
    return (
      <Card.ImgLeft>
        <ImageBackground>
          <OverRideStyling
            src={Img.Location}
            alt="A photo of our Inventor."
            title="The A photo of the Lotion Applicator Inventor."
          />
        </ImageBackground>
        <Card.TextAreaStyling>
          <Card.TitleStyling>
            Meet the Inventor and the Founder!
          </Card.TitleStyling>
          <Card.NarrativeStyling>
            YELLUR
          </Card.NarrativeStyling>
        </Card.TextAreaStyling>
      </Card.ImgLeft>
    )
  }
}

const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  max-width: 100%;
  max-height: 150px;
  background-image: url(${Img.GreyWallpaper});
  //background: radial-gradient(ellipse farthest-side,  #d7dbdb, black);
  background: white);
  // background: linear-gradient(
  //   to left,
  //   #d7dbdb 30px,
  //   #686867 25%,
  //   #686867 270px,
  //   #d7dbdb
  // );
  border: 2px solid black;
  border-radius: 10px;
  margin: 1px 15x 1px 15px;
`
const OverRideStyling = styled(Card.ImageStyling)`
  border-radius: 1px;
  border: 0px;
`
