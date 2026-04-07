/**
 * alleen.config.ts
 */
export const alleenConfig = {
  api: {
    prefix: 'api',
    version: 'v1',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
};