import * as ReactDOM from 'react-dom'

import { createApp } from '~/src/client/app'

window.onload = () => {
  const { pathname, search } = window.location
  const location = `${pathname}${search}`

  ReactDOM.hydrate(
    createApp(false, location, {}),
    document.getElementById('root')
  )
}
