import * as React from 'react'

import styled from 'styled-components'

import {
  LocationCard,
  MissionCard,
  Call_To_Action_Card
} from './components'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <HomePageContainer>
          <SampleCardStyle>
            <LocationCard />
          </SampleCardStyle>

          <SampleCardStyle>
            <MissionCard />
          </SampleCardStyle>

          <SampleCardStyle>
            <Call_To_Action_Card />
          </SampleCardStyle>
        </HomePageContainer>
      </div>
    )
  }
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding: 15px 5px 10px 5px;
  //border: 3px solid black;
`
const SampleCardStyle = styled.div`
  //background-color: green;
  padding: 0px 0px 10px 0px;
  //border: 1px solid grey;
`
