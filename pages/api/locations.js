import { getLocations } from '../../lib/api'

export default async (req, res) => {
  const locations = await getLocations(req.query)
  res.status(200).json(locations)
}
