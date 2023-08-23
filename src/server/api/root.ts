import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter, topicRouter, noteRouter } from "~/server/api/routers/index";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  topic: topicRouter,
  note: noteRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
