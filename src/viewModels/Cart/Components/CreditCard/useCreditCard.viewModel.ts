import { CreditCardInterface } from "@/shared/interfaces/credit-card"
import { format } from "date-fns"

export const useCreditCardViewModel = (creditCard: CreditCardInterface) => {
    const formattedExpirationDate = format(creditCard.expirationDate, "mm/yyyy")

    const formattedCardNumber = creditCard.number.slice(-4)

    return{
        creditCard,
        formattedExpirationDate,
        formattedCardNumber
    }
}