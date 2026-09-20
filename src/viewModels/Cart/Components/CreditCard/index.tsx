import { CreditCardInterface } from "@/shared/interfaces/credit-card"
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { CreditCardView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";

interface CreditCardComponentParams{
    creditCard: CreditCardInterface;
    isSelected: boolean;
    setSelectedCard: (card: CreditCardInterface) => void;
}

export const CreditCard: FC<CreditCardComponentParams> = ({ creditCard, isSelected, setSelectedCard }) => {
    const viewModel = useCreditCardViewModel(creditCard)

    return(
        <CreditCardView 
            {...viewModel}
            isSelected={isSelected}
            setSelectedCard={setSelectedCard}
        />
    )
}