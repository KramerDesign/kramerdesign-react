import * as React from 'react'
import styled from 'styled-components'

import * as Img from '~/src/assets/scoot'

import * as Card from '~/src/client/styles'

export class Card_4 extends React.Component {
  render() {
    return (
      <>
        <Card.ImgLeft>
         
            <Card.ImageStyling
            src={Img.Bike4}
            alt="A photo of a large tatoo on their back."
            title="The ezon back lotion applicator helps protect tatoos."/>
          
          <Card.TextAreaStyling>
            <Card.TitleStyling>A Beautiful Work of Art.</Card.TitleStyling>
            <Card.NarrativeStyling>
              Help to protect what might be one of your most valubale assets.
              The ezon back lotion applicator can effectivly apply the skin care
              products you need and want with ease.
            </Card.NarrativeStyling>
          </Card.TextAreaStyling>
        </Card.ImgLeft>
      </>
    )
  }
}

