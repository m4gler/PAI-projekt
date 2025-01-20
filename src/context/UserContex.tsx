import { createContext, useContext, useState, PropsWithChildren } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Define the structure of a User
type User = {
  firstName: string; // User's first name
  lastName: string;  // User's last name
  email: string;     // User's email address
  password?: string; // User's password (optional)
};

// Define the structure of the UserContext
type UserContextType = {
  currentUser: User | null; // Currently logged-in user
  setCurrentUser: (user: User | null) => void; // Function to set the current user
  addUser: (user: User) => Promise<void>; // Function to add a new user to the database
};

// Create a context for managing user-related data
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider component for the UserContext
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // State to track the current user

  // Function to add a new user to the Firestore database
  const addUser = async (user: User) => {
    try {
      const database = collection(db, "users"); // Reference the "users" collection in Firestore
      await addDoc(database, user); // Add the user to the collection
      setCurrentUser(user); // Set the newly added user as the current user
    } catch (error) {
      alert("error")
    }
  };

  return (
    // Provide the current user state and related functions to the component tree
    <UserContext.Provider value={{ currentUser, setCurrentUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext); // Access the context

  // Throw an error if the hook is used outside the provider
  if (!context) {
    throw new Error("error");
  }

  return context; // Return the context value
};
