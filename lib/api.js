import { openDb } from '../openDb';

export async function getLocations(query) {
  const db = await openDb()
  const locations = await db.all(`
    SELECT * FROM locations
  `)
  return locations
}
