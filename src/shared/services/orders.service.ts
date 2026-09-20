import { marketplaceAPIClient } from "../api/marketplace";
import { SubmitOrderRequestParams, SubmitOrdersResponse } from "../interfaces/http/orders";

export const submitOrder = async (order: SubmitOrderRequestParams) => {
    const { data } = await marketplaceAPIClient.post<SubmitOrdersResponse>("/orders", order)

    return data
}