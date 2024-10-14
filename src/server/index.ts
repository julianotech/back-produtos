import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import schema from './generated';

export function buildServer(port: number): void {
  const yoga = createYoga(schema);
  const server = createServer(yoga);
  server.listen(port, () => {
    yoga.logger.info(`Server is running on http://0.0.0.0:${port}/graphql`);
  });
}
