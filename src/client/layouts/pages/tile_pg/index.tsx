import * as React from 'react'
import styled from 'styled-components'

import * as views from '~/src/client/views'

type Props = {}

export class TilePage extends React.Component<Props> {
  render() {
    return (
      <LayoutGridContainer>
        <HeaderStyling>
          <header>
          <views.Header />
          </header>
        </HeaderStyling>
        <div>
          <NavStyling> 
            <nav>
              <views.Navbar selected="Home" />
            </nav>
          </NavStyling>
   
        <MainStyling>
            <main>
              <views.TilesView />
            </main>
        </MainStyling>
        <FooterStyling>
        <footer>
          <views.Footer />
        </footer>
        </FooterStyling>
        </div>
 </LayoutGridContainer>

    )
  }
}

const LayoutGridContainer = styled.div`
  display:grid;
  // border: solid red 3px;
  background-color:white;
  // grid-template-areas: 
  //   'zone1'
  //   'zone2'
  //   'zone3'
  //   'zone4';
`
const HeaderStyling = styled.div `
    background-color: green;
    // grid-area: zone1;
    border: solid pink 3px;

`
const NavStyling = styled.div `
    background-color: green;
    // grid-area: zone2;
    // border: solid blue 3px;
    // max-width: 960px;
    margin: 1px auto;
`
const MainStyling = styled.div `
    // background-color: yellow;
    // grid-area: zone3;
    // border: solid orange 4px;
    // max-width: 960px;
    margin: 1px auto;
`
const FooterStyling = styled.div `
    background-color: salmon;
    // grid-area: zone4;
    // max-width: 960px;
    margin: 1px auto;
`