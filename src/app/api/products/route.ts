import data from './data.json'

export async function GET() {
  // return Response.json({ message: 'Oi, Mundão de API!' })

  return Response.json(data.products)
}
