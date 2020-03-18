import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import { RealEmailServer, EmailSender } from './email'

let mailServer: EmailSender
RealEmailServer().then(server => {
  mailServer = server
})

const api = new Koa()

const router = new Router()
router.get('/users', (ctx: Koa.Context) => {
  ctx.body = 'hello world'
})

router.get('/location', (ctx: Koa.Context) => {
  ctx.body = 'this is dist folder'
})

router.post('/contact', async (ctx: Koa.Context) => {
  const body = ctx.request.body as {
    name: string
    email: string
    topic: string
    message: string
  }

  try {
    const resp = await mailServer.send({
      from: 'donotreply@shinewebcreations.com',
      to: ['katie@kramerdesign.ca'],
      subject: body.topic,
      text: `
      name: ${body.name}
      email: ${body.email}
      ${body.message}
    `
    })

    console.log(resp)
  } catch (e) {
    console.log(e)
  }

  ctx.body = 'successful'
})

api.use(bodyParser())
api.use(router.routes())
api.use(router.allowedMethods())

export default api
