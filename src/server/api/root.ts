import { createTRPCRouter } from "~/server/api/trpc";
import { sanctionRouter } from "./routers/sanction";
import { tweetRouter } from "./routers/tweet";
import { profileRouter } from "./routers/profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sanction: sanctionRouter,
  tweet: tweetRouter,
  profile: profileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
