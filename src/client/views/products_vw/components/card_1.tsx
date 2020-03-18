import * as React from 'react'
import * as Img from '~/src/assets/scoot'
import * as Card from '~/src/client/styles'



export class Card_1 extends React.Component {
  render() {
    return (
      <>
        <Card.ImgLeft>
          <Card.ImageStyling
            src={Img.Bike1}
            alt="A photo of the ez•on•lotion applicator."
            title="The ez•on•lotion applicator."
          />
          <Card.TextAreaStyling>
            <Card.TitleStyling>
              This is a unique Back Lotion Applicator.
            </Card.TitleStyling>
            <Card.NarrativeStyling>
              Everyone can use it easily. Not much lotion is needed to cover
              your back. Very little is wasted because of the applicator’s
              nonabsorbent fabric. Only one action is required to apply lotion
              to your back. And you can add any lotions to your back by
              yourself.
            </Card.NarrativeStyling>
          </Card.TextAreaStyling>
        </Card.ImgLeft>
      </>
    )
  }
}
