import * as React from 'react'

import styled from 'styled-components'

import { Card_1, Card_2, Card_3, Card_4, Card_5 } from './components'

export class Products extends React.Component {
  render() {
    return (
      <div>
        <AboutPageContainer>
          <CardStyling>
            <Card_1 />
          </CardStyling>

          <CardStyling>
            <Card_2 />
          </CardStyling>

          <CardStyling>
            <Card_3 />
          </CardStyling>

          <CardStyling>
            <Card_4 />
          </CardStyling>
        </AboutPageContainer>
      </div>
    )
  }
}

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 15px 10px 10px 10px;
`
const CardStyling = styled.div`
  padding: 0px 0px 10px 0px;
  margin: 10px 1px 1px 1px;
`
