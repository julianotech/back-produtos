import { createYoga, YogaServerInstance } from 'graphql-yoga';
import { createServer } from 'http';

import schema from './generated';
import type { Context } from './contracts';

function showServer(
  { logger }: YogaServerInstance<Context, {}>,
  port: number,
): void {
  logger.info(`GraphQL Server is running on http://0.0.0.0:${port}/graphql`);
}

export function buildServer(port: number): void {
  const yoga = createYoga(schema);
  const server = createServer(yoga);

  server.listen(port, () => showServer(yoga, port));
}
