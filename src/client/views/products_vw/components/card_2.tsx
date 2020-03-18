import * as React from 'react'

import * as Img from '~/src/assets/scoot'

import * as Card from '~/src/client/styles'

export class Card_2 extends React.Component {
  render() {
    return (
      <>
        <Card.ImgLeft>
          <Card.ImageStyling
            src={Img.Bike2}
            alt="A photo of someone on the beach."
            title="The ez•on•lotion applicator at the beach."
          />
          <Card.TextAreaStyling>
            <Card.TitleStyling>A Day at the Beach.</Card.TitleStyling>
            <Card.NarrativeStyling>
              Take some personal quite time. Just you and your ezon back lotion
              applicator. No need to ask for help appling sunscreen. No need to
              worry about sunburns today.
            </Card.NarrativeStyling>
          </Card.TextAreaStyling>
        </Card.ImgLeft>
      </>
    )
  }
}
