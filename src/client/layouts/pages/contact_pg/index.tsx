import * as React from 'react'
import style from 'styled-components'

import * as views from '~/src/client/views'

type Props = {}

export class Contact extends React.Component<Props> {
  render() {
    return (
      <LayoutGridContainer>
        <header>
          <views.Header />
        </header>
        <nav>
          <views.Navbar selected="Contact Us" />
        </nav>
        <main>
          <views.ContactFormView />
        </main>
        <footer>
          <views.Footer />
        </footer>
      </LayoutGridContainer>
    )
  }
}

const LayoutGridContainer = style.div`
background-color: lightgray;

`
