import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const sanctionRouter = createTRPCRouter({
  getSanctionResult: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input: { id }, ctx }) => {
      // const currentSanctionId = id;
      // const sanction = await ctx.db.sanctionResult.findMany()
      // if (sanction == null) return "";

      return "";
    }),
});
