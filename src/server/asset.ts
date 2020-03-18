import Koa from 'koa'
import serve from 'koa-static'

const asset = new Koa()

const distFolder = __dirname + '/static'
asset.use(serve(distFolder))

export default asset
