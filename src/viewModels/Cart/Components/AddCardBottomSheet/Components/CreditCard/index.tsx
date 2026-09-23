import { FC } from "react";
import { FocusedFieldType } from "../../useAddCardBottomSheet.viewModel";
import { CreditCardView } from "./CreditCard.view"
import { useCreditCardViewModel } from "./useCreditCardViewModel"

export interface CardComponentData{
    number: string;
    name: string;
    expiry: string;
    CVV: string;
}

interface CreditCardComponentParams{
    isFlipped: boolean;
    focusedField: FocusedFieldType;
    cardData: CardComponentData
}

export const CreditCard: FC<CreditCardComponentParams> = ({
    focusedField, isFlipped, cardData
}) => {
    const viewModel = useCreditCardViewModel(isFlipped)

    return <CreditCardView {...viewModel} focusedField={focusedField} cardData={cardData}/>
}