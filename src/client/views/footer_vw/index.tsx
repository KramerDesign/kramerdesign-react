import * as React from 'react'
import styled from 'styled-components'

import { Navbar_For_Footer } from '../navbar_footer_vw'

type Props = {}
// let shBlue = '#006fd6'

export class Footer extends React.Component<Props> {
  render() {
    return (
      <FooterContainer>
        <Navbar_For_Footer />
        <CopyRight> Copyright 2019 All Rights Reserved.</CopyRight>
        <PoweredBy></PoweredBy>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`

const CopyRight = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 0.7em;
  color: yellow;
  background-color: shBlue;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 5px;
`

const PoweredBy = styled.div`
  display: flex;
  color: yellow;
  background-color: shBlue;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-bottom: 5px;
`
