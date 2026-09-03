import { marketplaceAPIClient } from "../api/marketplace"
import { GetProductsRequest } from "../interfaces/http/product";
import { ProductResponse } from "../interfaces/http/product-response";

export const getProducts = async (params: GetProductsRequest) => {
    const { data } = await marketplaceAPIClient.post<ProductResponse>("/products", params)

    return data
}