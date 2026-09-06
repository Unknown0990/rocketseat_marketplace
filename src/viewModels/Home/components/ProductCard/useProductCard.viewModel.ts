import { ProductInterface } from "@/shared/interfaces/product"
import { FC } from "react";

interface useProductCardViewModelParams{
    product: ProductInterface;
}

export const useProductCardViewModel = ({ product }: useProductCardViewModelParams) => {
    const formatRating = product.averageRating.toFixed(1).replace(",", ".")

    return { product, formatRating };
}