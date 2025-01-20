import { createContext, useContext, useState, PropsWithChildren } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  addUser: (user: User) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const addUser = async (user: User) => {
    try {
      const database = collection(db, "users");
      await addDoc(database, user);
      setCurrentUser(user); 
      console.log("Użytkownik zapisany:", user);
    } catch (error) {
      console.error("Błąd zapisu użytkownika:", error);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
