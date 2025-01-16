import {createContext, useContext, useState, PropsWithChildren } from "react"


type CreditCard = {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

type CreditCartContextType = {
  Card: CreditCard;

}
export const CreditCardContext = createContext<CreditCartContextType | undefined>(undefined)

export const CreditCardProvider = ({children}: PropsWithChildren) => {
    const [CreditCard, setCredidCart ] = useState<string | null>(null)

    return (
        <CreditCardContext.Provider value={{CreditCard, setCredidCart}}>
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

