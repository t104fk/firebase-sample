import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User, subscribeStateChange } from "./firebase";

export type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
export const UserContext = createContext({} as UserContextType);
export const useUser = (): UserContextType => useContext(UserContext);

// https://colinhacks.com/essays/nextjs-firebase-authentication
// https://github.com/colinhacks/next-firebase-ssr
export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeStateChange((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
