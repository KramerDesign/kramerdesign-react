import * as React from 'react'

import * as Card from '~/src/client/styles'
import * as Img from '~/src/assets'

export class MissionCard extends React.Component {
  render() {
    return (
      <Card.ImgRight>
        <Card.ImageStyling
          src={Img.HappyCustomer}
          alt="A photo of happy customers."
          title="Some of the Lotion Applicators happy customers."
        />
        <Card.TextAreaStyling>
          <Card.TitleStyling>Very easy to use and effective.</Card.TitleStyling>
          <Card.NarrativeStyling>
          Scoot-a-Long Wasaga* is dedicated to keeping their customers happy and taken care of. From Sales and Service to maintenance and repairs, we are trying to expand the scooter industry, while making the experience enjoyable for everyone involved.
          </Card.NarrativeStyling>
        </Card.TextAreaStyling>
      </Card.ImgRight>
    )
  }
}
