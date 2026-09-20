import { FC } from "react"
import { CreditCardInterface } from "@/shared/interfaces/credit-card"
import { CartFooterView } from "./CartFooter.view";
import { useCartFooterViewModel } from "./useCartFooter.viewModel";

export interface CartFooterParams{
    openCartBottomSheet: () => void;
    creditCards: CreditCardInterface[]
    loadingCreditCards: boolean;
}

export const CartFooter: FC<CartFooterParams> = ({ openCartBottomSheet, creditCards, loadingCreditCards }) => {
    const viewModel = useCartFooterViewModel()

    return <CartFooterView {...viewModel} creditCards={creditCards} loadingCreditCards={loadingCreditCards} openCartBottomSheet={openCartBottomSheet}/>
}