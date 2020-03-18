import * as React from 'react'
import styled from 'styled-components'
import { BrowserRouter, StaticRouter } from 'react-router-dom'

import { Routes } from '~/src/client/routes'
import { GlobalStyle } from '~/src/client/styles'

import * as Img from '~/src/assets/scoot'
 
type Props = {}

export class App extends React.Component<Props> {
  render() {
    return (
      <MaxWidth>
        <SiteWidth>
          <GlobalStyle whiteColor />
          <Routes />
        </SiteWidth>
      </MaxWidth>
    )
  }
}

export const createApp = (
  ssr: boolean,
  location: string,
  context: { url?: string }
) => {
  if (ssr) {
    return (
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    )
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const MaxWidth = styled.div`
  // background-image: url(${Img.BikeWoman});
  // background-position: center center;
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-size: cover;
  background-color: lightgrey;
`

const SiteWidth = styled.div`
  // margin-left: auto;
  // margin-right: auto;
  // max-width: 960px;
`
