import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const sanctionRouter = createTRPCRouter({
  getSanctionResult: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input: { id }, ctx }) => {
      const sanction = await ctx.prisma.sanctionResult.findUnique({
        where: { id },
        select: {
          id: true,
        },
      });
      if (sanction == null) return "";

      return {
        id: sanction.id
      };
    }),
});
