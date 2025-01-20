import { createContext, useContext, useState, PropsWithChildren } from "react";

// Define the structure of a CreditCard object
type CreditCard = {
  firstName: string; // Cardholder's first name
  lastName: string; // Cardholder's last name
  cardNumber: string; // Card number (e.g., 1234 5678 9012 3456)
  expirationDate: string; // Expiry date of the card (MM/YY format)
  cvv: string; // CVV code (3-digit security code)
};

// Define the structure of the CreditCard context
type CreditCartContextType = {
  cards: CreditCard[]; // Array of credit card objects
  addCreditCard: (newCredit: CreditCard) => void; // Function to add a new credit card
};

// Create a context for managing credit card data
export const CreditCardContext = createContext<CreditCartContextType | undefined>(undefined);

// Define a provider component for the credit card context
export const CreditCardProvider = ({ children }: PropsWithChildren) => {
  // State to store the array of credit cards
  const [cards, setCreditCart] = useState<CreditCard[]>([]);

  // Function to add a new credit card to the state
  const addCreditCard = (newCredit: CreditCard) => {
    setCreditCart((prevCards) => [...prevCards, newCredit]); // Append the new card to the existing list
  };

  return (
    // Provide the cards and the addCreditCard function to the component tree
    <CreditCardContext.Provider value={{ cards, addCreditCard }}>
      {children}
    </CreditCardContext.Provider>
  );
};

// Custom hook to use the credit card context
export const useCart = (): CreditCartContextType => {
  const context = useContext(CreditCardContext); // Access the context

  if (!context) {
    // Throw an error if the context is used outside of its provider
    throw new Error("error");
  }

  return context; // Return the context value
};
