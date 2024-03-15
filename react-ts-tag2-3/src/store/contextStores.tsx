import { createContext } from "react";

export const UserContext = createContext<{ user: boolean | null; setUser: React.Dispatch<React.SetStateAction<boolean | null>>; }>(null)