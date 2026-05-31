"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/components/providers/SessionProvider";
import Link from "next/link";

export function UserAuthButton() {
    const { user, loading, isAuthenticated } = useSession();

    if (loading) {
        return (
            <Button variant="outline" className="w-[120px] opacity-50" disabled>
                Loading...
            </Button>
        );
    }

    if (user && isAuthenticated) {
        const fallbackInitial = (user.displayName || user.neupId || "U").charAt(0).toUpperCase();

        return (
            <Button
                asChild
                variant="outline"
                className="flex items-center gap-3 pl-4 pr-1 py-1 h-auto rounded-full border-input hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
                <Link href="/account">
                    <span className="text-sm font-medium">Get Inside</span>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.displayImage} alt={user.displayName || user.neupId || "User"} />
                        <AvatarFallback>{fallbackInitial}</AvatarFallback>
                    </Avatar>
                </Link>
            </Button>
        );
    }

    return (
        <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
            <Link href="/account/auth/start">
                Sign In
            </Link>
        </Button>
    );
}
