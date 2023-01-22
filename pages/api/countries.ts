// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/WorldInflationData'

type Data = {
  countries: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const countryNames : string[] = data.map((d, idx) => (
    d['Country Name']
  ))

  res.status(200).json({ countries : countryNames })
}
