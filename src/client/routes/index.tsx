import * as React from 'react'
import { Route } from 'react-router-dom'

import { TilePage, Products, Contact } from '~/src/client/layouts/pages'

type Props = {}

export class Routes extends React.Component<Props> {
  render() {
    return (
      <>
        <Route exact path={`/`} component={TilePage} />
        <Route exact path={`/tilePage`} component={TilePage} />
        <Route exact path={`/products`} component={Products} />
        <Route exact path={`/contact`} component={Contact} />
      </>
    )
  }
}
