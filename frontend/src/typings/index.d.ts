export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
    profile: string;
}

export type Order = {
    id: number;
    customer: number, //User
    products: Product[],
    value: number;
    trackingCode: string;
    createdAt: string;
}

export type Tracking = {
    address: string;
    latitude: number;
    longitude: number;
}