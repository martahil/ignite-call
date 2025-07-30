import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession( // unstable_getServerSession is deprecated
    req, 
    res, 
    buildNextAuthOptions(req, res) 
  )

  return  res.json({
    session,
  })
}