"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface UserProfile {
    accountId: string;
    neupId: string | null;
    displayName: string | null;
    displayImage: string;
    accountType: "individual" | "guest" | string;
    verified: boolean;
}

interface WhoisResponse extends UserProfile {
    success: boolean;
}

interface SessionContextType {
    user: UserProfile | null;
    loading: boolean;
    isAuthenticated: boolean;
    refreshSession: () => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SESSION_STORAGE_KEY = "neup_user_session";
const WHOIS_ENDPOINT = "https://neupgroup.com/account/bridge/api.v1/auth/whoisthis";

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    const isSignedInUser = (profile: UserProfile | null) => {
        return !!profile && profile.accountType !== "guest" && !!profile.neupId;
    };

    const fetchSession = async () => {
        try {
            setLoading(true);
            const response = await fetch(WHOIS_ENDPOINT, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data: WhoisResponse = await response.json();

                if (data.success && data.accountId) {
                    const userProfile: UserProfile = {
                        accountId: data.accountId,
                        neupId: data.neupId,
                        displayName: data.displayName,
                        displayImage: data.displayImage,
                        accountType: data.accountType,
                        verified: data.verified,
                    };
                    setUser(userProfile);
                    sessionStorage.setItem(
                        SESSION_STORAGE_KEY,
                        JSON.stringify(userProfile)
                    );
                } else {
                    setUser(null);
                    sessionStorage.removeItem(SESSION_STORAGE_KEY);
                }
            } else {
                setUser(null);
                sessionStorage.removeItem(SESSION_STORAGE_KEY);
            }
        } catch (error) {
            console.error("Failed to fetch session:", error);
            setUser(null);
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (storedSession) {
            try {
                const parsed: UserProfile = JSON.parse(storedSession);
                setUser(parsed);
                setLoading(false);
            } catch (e) {
                console.error("Error parsing session storage", e);
                sessionStorage.removeItem(SESSION_STORAGE_KEY);
            }
        }

        fetchSession();
    }, []);

    return (
        <SessionContext.Provider
            value={{
                user,
                loading,
                isAuthenticated: isSignedInUser(user),
                refreshSession: fetchSession,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
}
