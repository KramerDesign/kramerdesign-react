import * as http from 'http'
import { stat, createReadStream, Stats } from 'fs'
import Koa from 'koa'
import mount from 'koa-mount'
import { join } from 'path'

import { useCompress } from './compress'
import api from './api'
import asset from './asset'
import ssr from './ssr'

const fileInfo = (filename: string): Promise<Stats> => {
  return new Promise((res, rej) => {
    stat(filename, (err, stats) => {
      if (err) {
        rej(err)
        return
      }
      res(stats)
    })
  })
}

const app = new Koa()
app.use(useCompress())
app.use(mount('/api', api))
app.use(async (ctx, next) => {
  const path = ctx.path

  if (path.indexOf('.mp4') !== -1) {
    const videoFile = join(__dirname, path)
    const { size } = await fileInfo(videoFile)
    const range: string = ctx.headers.range

    if (!range) {
      ctx.set('Content-Length', `${size}`)
      ctx.status = 200
      ctx.body = createReadStream(videoFile)
      return
    }

    const segments = range.replace(/bytes=/, '').split('-')
    const start = parseInt(segments[0], 10)
    const end = segments[1] ? parseInt(segments[1], 10) : size - 1

    ctx.status = 206
    ctx.set('Content-Range', `bytes ${start}-${end}/${size}`)
    ctx.set('Accept-Ranges', 'bytes')
    ctx.set('Content-Length', `${end - start + 1}`)
    ctx.set('Content-Type', 'video/mp4')

    ctx.body = createReadStream(videoFile, { start, end })
    return
  }

  await next()
})
app.use(mount('/static', asset))

app.use(ssr)

http.createServer(app.callback()).listen(3000)
