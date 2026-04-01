import { describe, expect, it } from "vitest";
import { adminRouter } from "./admin";
import type { TrpcContext } from "../_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(authenticated: boolean = false): TrpcContext {
  const user: AuthenticatedUser | null = authenticated
    ? {
        id: 1,
        openId: "test-user",
        email: "test@example.com",
        name: "Test User",
        loginMethod: "test",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date(),
      }
    : null;

  return {
    user: user as TrpcContext["user"],
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("admin router", () => {
  it("should login with correct credentials", async () => {
    const ctx = createAuthContext(false);
    const caller = adminRouter.createCaller(ctx);

    const result = await caller.login({
      username: "admin",
      password: "realiving2024",
    });

    expect(result.success).toBe(true);
    expect(result.token).toBeDefined();
  });

  it("should reject invalid credentials", async () => {
    const ctx = createAuthContext(false);
    const caller = adminRouter.createCaller(ctx);

    try {
      await caller.login({
        username: "admin",
        password: "wrongpassword",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("UNAUTHORIZED");
    }
  });

  it("should return user info when authenticated", async () => {
    const ctx = createAuthContext(true);
    const caller = adminRouter.createCaller(ctx);

    const result = await caller.me();

    expect(result.authenticated).toBe(true);
    expect(result.user).toBeDefined();
    expect(result.user?.email).toBe("test@example.com");
  });

  it("should logout successfully", async () => {
    const ctx = createAuthContext(true);
    const caller = adminRouter.createCaller(ctx);

    const result = await caller.logout();

    expect(result.success).toBe(true);
  });
});
