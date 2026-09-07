import { marketplaceAPIClient } from "../api/marketplace"
import { PaginatedResponse } from "../interfaces/http/paginated-response";
import { GetProductsRequest } from "../interfaces/http/product";
import { ProductCommentInterface } from "../interfaces/http/product-comment";
import { GetProductCommentsInterface } from "../interfaces/http/product-comments";
import { GetProductDetailsRequest } from "../interfaces/http/product-details";
import { ProductCategory, ProductInterface } from "../interfaces/product";

export const getProducts = async (params: GetProductsRequest) => {
    const { data } = await marketplaceAPIClient.post<PaginatedResponse<ProductInterface>>("/products", params)

    return data
}

export const getProductsCategories = async () => {
    const { data } = await marketplaceAPIClient.get<ProductCategory[]>("/products/categories")

    return data
}

export const getProductDetails = async (id: number) => {
    const { data } = await marketplaceAPIClient.get<GetProductDetailsRequest>(`products/${id}`)

    return data
}

export const getProductComments = async (params: GetProductCommentsInterface) => {
    const { data } = await marketplaceAPIClient.post<PaginatedResponse<ProductCommentInterface>>("/products/comments", params)

    return data
}