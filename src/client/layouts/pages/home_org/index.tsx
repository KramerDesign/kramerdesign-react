import * as React from 'react'
import styled from 'styled-components'

import * as views from '~/src/client/views'

type Props = {}

export class Home extends React.Component<Props> {
  render() {
    return (
      <LayoutGridContainer>
        <header>
          <views.Header />
        </header>
        <nav>
          <views.Navbar selected="Home" />
        </nav>
        <main>
          <views.TilesView />
        </main>
        <footer>
          <views.Footer />
        </footer>
      </LayoutGridContainer>
    )
  }
}

const LayoutGridContainer = styled.div`
  background: lightgrey;
`
const HeaderBackgound = styled.div`
  background: white;
`
const BodyBackground = styled.div`
  background-color: #ffffff;
`
