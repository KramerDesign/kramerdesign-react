import * as React from 'react'
import styled from 'styled-components'

import * as Img from '~/src/assets'
import { PhoneNumber } from '~/src/client/components/phone-number'

type Props = {}

export class Header extends React.Component<Props> {
  render() {
    return (
      <HeaderView>
        <Logo src={Img.Logo} alt="Designedbykkramer" />
        <Stacked>
          {/* <NameStyling
            src={Img.EzOnLotion}
            alt="Designed by Kkramer Headline"
          /> */}
        </Stacked>

        <PhoneNumberStyling value="705-994-4450" />
      </HeaderView>
    )
  }
}

const HeaderView = styled.div`
  background-color: transparent;
  display: flex;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    //padding 5px 0px 10px 10px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Logo = styled.img`
  max-width: 100%;
  max-height: auto;

  display: flex;
  border: solid black 3px;
  border-radius: 10px;

  @media (min-width: 700px) {
    flex-direction: row;
    margin: 20px 10px 1px 30px;
  }

  @media (max-width: 700px) {
    margin: 10px 10px 10px 10px;
  }
`

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NameStyling = styled.img`
  display: flex;
  max-width: 100%;

  @media (min-width: 640px) {
    padding: 30px 0px 10px 1px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`
const DomainNameStyling = styled.div`
  display: flex;
  justify-content: center;
  color: #404652;
  font-weight: 900;
  font-size: 1.8em;
  text-decoration: none;

  @media (min-width: 640px) {
    padding: 1px 20px 0px 20px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    //align-items: center;
    padding: 0px 0px 1px 30px;
  }
`

const PhoneNumberStyling = styled(PhoneNumber)`
  color: white;
  font-weight: 900;
  font-size: 1.8em;
  text-decoration: none;
  background-color: transparent;

  @media (min-width: 640px) {
    padding: 20px 20px 0px 0px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 10px;
    padding: 0px 0px 1px 30px;
  }
`
