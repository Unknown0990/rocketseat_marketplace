import { marketplaceAPIClient } from "../api/marketplace"
import { CreditCardInterface } from "../interfaces/credit-card"
import { CreateCreditCardRequest, CreateCreditCardResponse } from "../interfaces/http/create-credit-card"

export const getCreditCards = async () => {
    const { data } = await marketplaceAPIClient.get<CreditCardInterface[]>("/credit-cards")

    return data
}

export const createCreditCard = async(cardData: CreateCreditCardRequest) => {
    const { data } = await marketplaceAPIClient.post<CreateCreditCardResponse>("/credit-cards", cardData)

    return data
}