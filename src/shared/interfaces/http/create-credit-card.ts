import { CreditCardInterface } from "../credit-card";

export interface CreateCreditCardRequest{
    number: string;
    CVV: number;
    expirationDate: string;
}

export interface CreateCreditCardResponse{
    data: CreditCardInterface;
    message: string;
    success: boolean;
}