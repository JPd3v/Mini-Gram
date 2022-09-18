import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

const AuthContext = createContext<any>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!AuthContext) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }

  return context;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userInformation, setUserInformation] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setIsAuthenticated(true);
        return setUserInformation(user);
      }
      setIsAuthenticated(false);
      return setUserInformation(undefined);

      // User is signed out
    });
    return unsuscribe;
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ userInformation, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
