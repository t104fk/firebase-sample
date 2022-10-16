import { useRouter } from "next/router";
import { useCallback } from "react";
import { signInWithEmail, signUpWithEmail, signOut } from "./firebase";
import { useUser } from "./UserProvider";

type AuthResult = Error | undefined;
type UseAuth = {
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (email: string, password: string) => Promise<AuthResult>;
  signOut: () => Promise<void>;
};

// https://github.com/kurab/react-typescript-firebase/blob/main/app/src/hooks/useAuth.ts
export const useAuth = (): UseAuth => {
  const router = useRouter();
  const { setUser } = useUser();

  const signIn = useCallback(
    async (email, password) => {
      return signInWithEmail(email, password, (user) => {
        setUser(user);
        router.push("/");
      }).catch((err) => err);
    },
    [router.pathname, setUser]
  );

  const signUp = useCallback(
    async (email, password) => {
      return signUpWithEmail(email, password, (user) => {
        setUser(user);
        router.push("/");
      }).catch((err) => err);
    },
    [router.pathname, setUser]
  );
  const _signOut = useCallback(async () => {
    return signOut(() => {
      setUser(null);
      router.push("/");
    });
  }, []);
  return {
    signIn,
    signUp,
    signOut: _signOut,
  };
};
