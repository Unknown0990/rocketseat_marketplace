import { CartProductProps } from "@/shared/store/cart-store"
import { FC } from "react";
import { useProductCartCardViewModel } from "./useProductCartCard.viewModel";
import { ProductCartCardView } from "./ProductCartCard.view";

interface ProductCardCartParams{
    product: CartProductProps;
}

export const ProductCartCard: FC<ProductCardCartParams> = ({ product }) => {
    const viewModel = useProductCartCardViewModel()

    return <ProductCartCardView {...viewModel} product={product}/>
}