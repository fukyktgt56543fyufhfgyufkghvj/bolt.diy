import type { ServerBuild } from '@remix-run/cloudflare';
// @ts-nocheck
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

export const onRequest: PagesFunction = async (context) => {
  const serverBuild = (await import('../build/server')) as any;

  const handler = createPagesFunctionHandler({
    build: serverBuild as any,
  });

  return handler(context);
};
