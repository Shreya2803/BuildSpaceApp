import { createContext, useContext, useState, ReactNode } from "react";

export interface UserProfile {
  name: string;
  bio: string;
  skills: string[];
  interests: string[];
  projects: string[];
  collaborators: string[];
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserProfile;
  login: () => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: {
    name: "user",
    bio: "",
    skills: [],
    interests: [],
    projects: [],
    collaborators: [],
  },
  login: () => {},
  logout: () => {},
  updateProfile: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile>({
    name: "user",
    bio: "",
    skills: [],
    interests: [],
    projects: [],
    collaborators: [],
  });

  const updateProfile = (profile: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...profile }));
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      user,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
