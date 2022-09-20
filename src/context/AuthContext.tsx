import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
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
  const [userInformation, setUserInformation] = useState<any>(
    localStorage.getItem('userInformation')
      ? JSON.parse(localStorage.getItem('userInformation') as string)
      : null
  );

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        localStorage.setItem('userInformation', JSON.stringify(user.uid));
        return setUserInformation(user.uid);
      }
      localStorage.removeItem('userInformation');
      return setUserInformation(undefined);
      // User is signed out
    });
    return unsuscribe;
  });

  const value = useMemo(
    () => ({
      userInformation,
    }),
    [userInformation]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
