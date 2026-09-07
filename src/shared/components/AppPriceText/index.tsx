import { FC } from "react";
import { AppPriceTextView } from "./AppPriceTextView"
import { useAppPriceTextViewModel } from "./useAppPriceText.viewModel";

interface AppPriceTextParams{
    classNameCurrency?: string;
    classNameValue?: string;
    value: number;
}

export const AppPriceText: FC<AppPriceTextParams> = ({ classNameCurrency, classNameValue, value }) => {
    const props = useAppPriceTextViewModel(value)

    return(
        <AppPriceTextView {...props} classNameCurrency={classNameCurrency} classNameValue={classNameValue} />
    )
}