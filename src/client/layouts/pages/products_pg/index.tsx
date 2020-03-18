import * as React from 'react'
import style from 'styled-components'

import * as views from '~/src/client/views'

type Props = {}

export class Products extends React.Component<Props> {
  render() {
    return (
      <LayoutGridContainer>
        <header>
          <views.Header />
        </header>
        <nav>
          <views.Navbar selected="E-Bikes" />
        </nav>
        <main>
          <views.Products />
        </main>
        <footer>
          <views.Footer />
        </footer>
      </LayoutGridContainer>
    )
  }
}

const LayoutGridContainer = style.div`
background: lightgrey;
`
