import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    email: v.optional(v.string()),
    user: v.optional(v.string()),
    message: v.string(),
  }),
  brainstorm: defineTable({
    title: v.string(),
    post: v.optional(v.string()),
  })
});