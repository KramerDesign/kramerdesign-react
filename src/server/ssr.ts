import * as Koa from 'koa'
import * as ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import * as Fav from '~/src/assets/favicons'
import { createApp } from '~/src/client/app'
// import { System } from '../client/di'

const htmlContent = (
  content: string,
  styleTags: string,
  initialState: any = {}
) => `
<!DOCTYPE html>

<html lang="en ">

<head>

<title>Designedbykkramer | Web Design by Katie Kramer </title>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<meta
  name="description"
  content=""
/>
<meta
  name="keywords"
  content=""
/>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" type="image/png"  href=${Fav.Fav_2} />
${styleTags}
</head>
  <body>
    <script>
      initialState=${JSON.stringify(initialState)};
    </script>
    <div id="modal"></div>
    <div id="root">${content}</div>
    <script src="/static/index.js"></script>
  </body>
</html>
`

const robotsContent = `User-Agent: *
Allow: /
Disallow:
`

export default async (ctx: Koa.Context) => {
  const location = ctx.request.url
  const context: { url?: string } = {}

  if (location.endsWith('/robots.txt')) {
    ctx.status = 200
    ctx.response.body = robotsContent
    return
  }

  // TODO: chnage this to empty object
  // const state = {
  //   SearchStore: { search: { query: 'hello world' } }
  // }

  // const container = new System(state)

  const sheet = new ServerStyleSheet()

  const content = ReactDOMServer.renderToString(
    sheet.collectStyles(createApp(true, location, context))
  )

  if (context.url) {
    ctx.status = 307
    ctx.redirect(context.url)
    return
  }

  // const initialState = container.getAllState()
  const initialState = {}
  const styleTags = sheet.getStyleTags()

  ctx.status = 200
  ctx.response.body = htmlContent(content, styleTags, initialState)
}
