import { PaginatedResponse } from "./paginated-response";
import { ProductCommentInterface } from "./product-comment";

export interface GetProductCommentsInterface{
    productId: number;
    pagination: {
        page: number;
        perPage: number;
    }
}