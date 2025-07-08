import { mutation } from "_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    email: v.string(),
    user: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      email: args.email ?? null,
      user: args.user ?? null,
      message: args.message,
    });
  },
});