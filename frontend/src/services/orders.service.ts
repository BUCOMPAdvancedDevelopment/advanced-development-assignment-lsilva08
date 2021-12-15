import { Order } from "../typings"

export const findOrders = async (): Promise<Order[]> => {
    return [
        { 
            id: 1, 
            products: [
                { id: 7, name: 'productname', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 2, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 3, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 4, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 5, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 6, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 7, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 8, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 9, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
        { 
            id: 10, 
            products: [
                { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
                { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
            ],
            customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
            trackingCode: '123123123',
            value: 20.0,
            createdAt: '12/12/2021'
        },
    ]
}

export const findOrderById = async (orderId: number): Promise<Order> => {
    return { 
        id: orderId, 
        products: [
            { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
            { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
        ],
        customer: { email: 'test', id: 1, name: 'test', profile: 'profile' },
        trackingCode: '123123123',
        value: 20.0,
        createdAt: '12/12/2021'
    }
}