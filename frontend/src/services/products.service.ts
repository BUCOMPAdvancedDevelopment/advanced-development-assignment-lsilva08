export const findProducts = async (): Promise<any> => {
    return [
        { name: 'test7', price: 10.0 },
        { name: 'test6', price: 10.0 },
        { name: 'test5', price: 10.0 },
        { name: 'test4', price: 10.0 },
        { name: 'test5', price: 10.0 },
        { name: 'test6', price: 10.0 },
        { name: 'test7', price: 10.0 },
        { name: 'test8', price: 10.0 },
        { name: 'test9', price: 10.0 },
        { name: 'test10', price: 10.0 },
        { name: 'test11', price: 10.0 },
        { name: 'test12', price: 10.0 },
        { name: 'test13', price: 10.0 },
        { name: 'test14', price: 10.0 },
        { name: 'test15', price: 10.0 },
        { name: 'test16', price: 10.0 },
        { name: 'test17', price: 10.0 },
        { name: 'test18', price: 10.0 },
    ]
}

export const findProductById = async (productId: number): Promise<any> => {
    return { id: productId, name: 'test7', price: 10.0 }
}

export const buyProduct = async (userId: number, productId: number, quantity: number): Promise<any> => {
    console.log(`Buying ${quantity} of product ${productId} for user ${userId}`)
    return true;
}