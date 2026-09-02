import { ProductInterface } from "@/shared/interfaces/product"
import { FC } from "react";

interface useProductCardViewModelParams{
    product: ProductInterface;
}

export const useProductCardViewModel = ({ product }: useProductCardViewModelParams) => {
    return { product };
}