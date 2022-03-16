import { getAllSites } from "@/lib/db-admin"

export default async function handler(req, res) {
  const sites = await getAllSites()
  res.status(200).json({sites})
}
