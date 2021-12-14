import { Product } from "../typings"

export const findProducts = async (): Promise<any> => {
    return [
        { id: 7, name: 'test7', price: 10.0 },
        { id: 6, name: 'test6', price: 10.0 },
        { id: 5, name: 'test5', price: 10.0 },
        { id: 4, name: 'test4', price: 10.0 },
        { id: 5, name: 'test5', price: 10.0 },
        { id: 6, name: 'test6', price: 10.0 },
        { id: 7, name: 'test7', price: 10.0 },
        { id: 8, name: 'test8', price: 10.0 },
        { id: 9, name: 'test9', price: 10.0 },
        { id: 10, name: 'test10', price: 10.0 },
        { id: 11, name: 'test11', price: 10.0 },
        { id: 12, name: 'test12', price: 10.0 },
        { id: 13, name: 'test13', price: 10.0 },
        { id: 14, name: 'test14', price: 10.0 },
        { id: 15, name: 'test15', price: 10.0 },
        { id: 16, name: 'test16', price: 10.0 },
        { id: 17, name: 'test17', price: 10.0 },
        { id: 18, name: 'test18', price: 10.0 },
    ]
}

export const findProductById = async (productId: number): Promise<any> => {
    return { id: productId, name: 'test7', price: 10.0 }
}

export const buyProduct = async (userId: number, productId: number, quantity: number): Promise<any> => {
    console.log(`Buying ${quantity} of product ${productId} for user ${userId}`)
    return true;
}

export const upsertProduct = async (name: string, price: number, id?: number): Promise<Product | undefined> => {
    console.log(`Upserting product ${id || 'new'} with name ${name} and price ${price}`);
    return { id: id || 1, name, price };
}