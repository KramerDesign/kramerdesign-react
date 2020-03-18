import * as React from 'react'

import * as Img from '~/src/assets/scoot'

import * as Card from '~/src/client/styles'
export class Card_3 extends React.Component {
  render() {
    return (
      <>
        <Card.ImgLeft>
          <Card.ImageStyling
            src={Img.Bike3}
            alt="A photo of a sunburn."
            title="The ezon lotion applicator could have prevented this."
          />
          <Card.TextAreaStyling>
            <Card.TitleStyling>Never Again.</Card.TitleStyling>
            <Card.NarrativeStyling>
              The next day. Why let this happen to you when it only takes a
              minute to protect yourself from the sun. The ezon back lotion
              applicator can prevent this type of sunburn. But now that you have
              it, you can use the ezon back lotion applicator to apply skin care
              and healing lotions.
            </Card.NarrativeStyling>
          </Card.TextAreaStyling>
        </Card.ImgLeft>
      </>
    )
  }
}
