export interface SubmitOrderRequestParams{
  creditCardId: number,
  items: { productId: number, quantity: number }[]
}

export interface SubmitOrdersResponse{
  message: string;
  ordersCount: number;
  orders: {
    id: number,
    productId: number,
    productName: string,
    productPhoto: string,
    quantity: number,
    totalPrice: number,
    createdAt: Date,
    creditCard: {
      id: number,
      maskedNumber: string
    }
  }[],
  totalOrders: number
}