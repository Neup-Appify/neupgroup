"use client";

import { useSession } from "@/components/providers/SessionProvider";

export function HomeWelcome() {
  const { user, loading, isAuthenticated } = useSession();

  if (loading || !user) {
    return null;
  }

  if (!isAuthenticated || !user.displayName) {
    return null;
  }

  const firstName = user.displayName.split(" ")[0] ?? user.displayName;

  return (
    <section className="container px-4 md:px-6 pt-6 md:pt-8">
      <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm md:text-base">
        <p className="font-medium text-foreground">
          Welcome back, {firstName}. Let&apos;s build something meaningful today.
        </p>
      </div>
    </section>
  );
}
