import { CreditCardInterface } from "@/shared/interfaces/credit-card"
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { CreditCardView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";

interface CreditCardComponentParams{
    creditCard: CreditCardInterface;
}

export const CreditCard: FC<CreditCardComponentParams> = ({ creditCard }) => {
    const viewModel = useCreditCardViewModel(creditCard)

    return <CreditCardView {...viewModel} />
}