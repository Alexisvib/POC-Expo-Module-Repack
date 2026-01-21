import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type ShineModule = "invoicing" | "banking" | "accounting";

type UserProfile = {
  modulesAvailable: ShineModule[];
};

type UserContextValue = {
  profile: UserProfile;
  toggleProduct: (product: ShineModule) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>({
    modulesAvailable: ["invoicing", "banking", "accounting"],
  });

  const toggleProduct = useCallback((product: ShineModule) => {
    setProfile((prev) => ({
      modulesAvailable: prev.modulesAvailable.includes(product)
        ? prev.modulesAvailable.filter((p) => p !== product)
        : [...prev.modulesAvailable, product],
    }));
  }, []);

  const value = useMemo<UserContextValue>(
    () => ({ profile, toggleProduct }),
    [profile, toggleProduct],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return ctx;
}
