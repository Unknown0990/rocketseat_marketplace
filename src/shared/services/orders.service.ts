import { marketplaceAPIClient } from "../api/marketplace";
import { GetOrdersResponse } from "../interfaces/http/get-orders";
import { SubmitOrderRequestParams, SubmitOrdersResponse } from "../interfaces/http/submit-orders";

export const submitOrder = async (order: SubmitOrderRequestParams) => {
    const { data } = await marketplaceAPIClient.post<SubmitOrdersResponse>("/orders", order)

    return data
}

export const getOrders  = async () => {
    const { data } = await marketplaceAPIClient.get<GetOrdersResponse>("/orders")

    return data
}