import compress from 'koa-compress'
import { Z_SYNC_FLUSH } from 'zlib'

export const useCompress = () => {
  return compress({
    threshold: 2048,
    flush: Z_SYNC_FLUSH
  })
}
