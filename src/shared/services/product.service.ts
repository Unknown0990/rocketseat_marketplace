import { marketplaceAPIClient } from "../api/marketplace"
import { GetProductsRequest } from "../interfaces/http/product";
import { ProductResponse } from "../interfaces/http/product-response";
import { ProductCategory } from "../interfaces/product";

export const getProducts = async (params: GetProductsRequest) => {
    const { data } = await marketplaceAPIClient.post<ProductResponse>("/products", params)

    return data
}

export const getProductsCategories = async () => {
    const { data } = await marketplaceAPIClient.get<ProductCategory[]>("/products/categories")

    return data
}