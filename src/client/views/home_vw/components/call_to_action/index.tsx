import * as React from 'react'

import * as Card from '~/src/client/styles'
import styled from 'styled-components'
import * as Img from '~/src/assets'

export class Call_To_Action_Card extends React.Component {
  render() {
    return (
      <Card.ImgRight>
        <Card.ImageStyling
          src={Img.FlatApplicator}
          alt="A packaged ezon back lotion applicator"
          title="A packaged ezon back lotion applicator"
        />
        <Card.TextAreaStyling>
          <Card.TitleStyling>
            Save your back and let ezon do the job!
          </Card.TitleStyling>
          <Card.NarrativeStyling>
            Made in North America. The ezon back lotion applicator is
            environmentally friendly and will save you money. (No Costly aerosol
            sprays) The ezon back lotion applicator is effective and efficent.
            Try it youself.
            <Card.CallToAction>
              Contact us today to get your own back lotion applicator.
            </Card.CallToAction>
          </Card.NarrativeStyling>
        </Card.TextAreaStyling>
      </Card.ImgRight>
    )
  }
}
