import {createContext, useContext, useState, PropsWithChildren } from "react"


type CreditCard = {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

type CreditCartContextType = {
    cards: CreditCard[];
    addCreditCard: (newCredit: CreditCard) => void
}
export const CreditCardContext = createContext<CreditCartContextType | undefined>(undefined)

export const CreditCardProvider = ({children}: PropsWithChildren) => {
    const [cards, setCreditCart ] = useState<CreditCard[]>([])

    const addCreditCard = (newCredit: CreditCard) => {
        setCreditCart((prevCards) => [...prevCards, newCredit])
    }

    return (
        <CreditCardContext.Provider value={{cards, addCreditCard}}>
            {children}
        </CreditCardContext.Provider>
    )
    
    
}

export const useCart = (): CreditCartContextType => {
        const context = useContext(CreditCardContext);

        if(!context) {
            throw new Error("error");
            
        }
    return context
}

