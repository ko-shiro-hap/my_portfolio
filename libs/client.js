import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'my-portfolio-app',
  apiKey: process.env.API_KEY,
});
