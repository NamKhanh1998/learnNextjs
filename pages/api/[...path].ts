import type { NextApiRequest, NextApiResponse } from 'next'
import httProxy from 'http-proxy'

export const config = {
    api: {
        bodyParser: false
    }
}

const proxy = httProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    req.headers.cookie = ''

    proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false
    })
    // res.status(200).json({ name: 'Path match' })
}
