import { Product } from "../typings"

export const findProducts = async (): Promise<Product[]> => {
    return [
        { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
        { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
        { id: 5, name: 'test5', price: 10.0, description: 'description 5' },
        { id: 4, name: 'test4', price: 10.0, description: 'description 4' },
        { id: 5, name: 'test5', price: 10.0, description: 'description 5' },
        { id: 6, name: 'test6', price: 10.0, description: 'description 6' },
        { id: 7, name: 'test7', price: 10.0, description: 'description 7' },
        { id: 8, name: 'test8', price: 10.0, description: 'description 8' },
        { id: 9, name: 'test9', price: 10.0, description: 'description 9' },
        { id: 10, name: 'test10', price: 10.0, description: 'description 10' },
        { id: 11, name: 'test11', price: 10.0, description: 'description 11' },
        { id: 12, name: 'test12', price: 10.0, description: 'description 12' },
        { id: 13, name: 'test13', price: 10.0, description: 'description 13' },
        { id: 14, name: 'test14', price: 10.0, description: 'description 14' },
        { id: 15, name: 'test15', price: 10.0, description: 'description 15' },
        { id: 16, name: 'test16', price: 10.0, description: 'description 16' },
        { id: 17, name: 'test17', price: 10.0, description: 'description 17' },
        { id: 18, name: 'test18', price: 10.0, description: 'description 18' },
    ]
}

export const findProductById = async (productId: number): Promise<Product> => {
    return { id: productId, name: 'test7', price: 10.0, description: 'description 7' }
}

export const buyProduct = async (userId: number, productId: number, quantity: number): Promise<boolean> => {
    console.log(`Buying ${quantity} of product ${productId} for user ${userId}`)
    return true;
}

export const upsertProduct = async (name: string, price: number, description: string, id?: number): Promise<Product | undefined> => {
    console.log(`Upserting product ${id || 'new'} with name ${name} and price ${price}`);
    return undefined;//{ id: id || 1, name, price, description };
}