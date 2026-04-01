import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc";

/**
 * Simple admin router for TinaCMS authentication
 * In production, you'd want to store admin credentials in the database
 */

// Simple in-memory admin credentials (in production, use database + hashing)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "realiving2024";

export const adminRouter = router({
  // Login endpoint for TinaCMS
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (input.username !== ADMIN_USERNAME || input.password !== ADMIN_PASSWORD) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      // In a real app, you'd create a session token here
      return {
        success: true,
        message: "Logged in successfully",
        token: "admin-token-" + Date.now(), // Simple token for demo
      };
    }),

  // Check if user is authenticated
  me: protectedProcedure.query(({ ctx }) => {
    return {
      authenticated: !!ctx.user,
      user: ctx.user,
    };
  }),

  // Logout
  logout: protectedProcedure.mutation(({ ctx }) => {
    return {
      success: true,
      message: "Logged out successfully",
    };
  }),
});
