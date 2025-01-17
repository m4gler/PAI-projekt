import { createContext, useContext, useState, PropsWithChildren } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type UserContextType = {
  addUser: (user: User) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const addUser = async (user: User) => {
    try {
      const database = collection(db, "users"); 
      await addDoc(database, user); 
      console.log("Użytkownik zapisany:", user);
    } catch (error) {
      console.error("Błąd zapisu użytkownika:", error);
    }
  };

  return (
    <UserContext.Provider value={{ addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
