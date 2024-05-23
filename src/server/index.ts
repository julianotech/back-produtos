// import { readFileSync } from 'node:fs'
import { createYoga, createSchema } from 'graphql-yoga';
import { createServer } from 'http';
import schema from './schema/generated';


export function buildServer (port: number): void {

  const yoga = createYoga(schema)
  const server = createServer(yoga)
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/graphql')
  })
}