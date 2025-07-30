import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

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

const getMessages = query ({
  args: {}, 
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  }, });