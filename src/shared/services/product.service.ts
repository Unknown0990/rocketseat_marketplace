import { marketplaceAPIClient } from "../api/marketplace"
import { CreateCommentRequest, CreateCommentResponse } from "../interfaces/http/create-comment";
import { PaginatedResponse } from "../interfaces/http/paginated-response";
import { GetProductsRequest } from "../interfaces/http/product";
import { ProductCommentInterface } from "../interfaces/http/product-comment";
import { GetProductCommentsInterface } from "../interfaces/http/product-comments";
import { GetProductDetailsRequest } from "../interfaces/http/product-details";
import { UpdateCommentRequest, UpdateCommentResponse } from "../interfaces/http/update-comment";
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

export const createComment = async(params: CreateCommentRequest) => {
    const { data } = await marketplaceAPIClient.post<CreateCommentResponse>("/products/create/comments", params)

    return data
}

export const getUserComment = async(productId: number) => {
    const { data } = await marketplaceAPIClient.get<{
        comment: {
            id: number;
            content: string;
            createdAt: Date;
            user: {
                id: number;
                name: string;
            },
        },
        rating: number;
    }>(`/products/${productId}/user-comment`)

    return data
}

export const updateUserComment = async(params: UpdateCommentRequest) => {
    const { data } = await marketplaceAPIClient.put<UpdateCommentResponse>(`/products/comments/${params.commentId}`, { content: params.content, rating: params.rating })

    return data
}