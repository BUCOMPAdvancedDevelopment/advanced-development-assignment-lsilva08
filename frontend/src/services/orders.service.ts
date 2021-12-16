import { Order } from "../typings"
import api from "./api"

export const findOrders = async (): Promise<Order[]> => {
    return (await api.get('/orders')).data
}

export const findOrderById = async (orderId: number): Promise<Order> => {
    return (await api.get(`/orders/${orderId}`)).data
}