import React, { useState } from 'react';
import * as _ from 'lodash';
import { Product } from '../../../typings';
import { upsertProduct } from '../../../services/products.service';

export interface ProductListContextProps {
    upserting: boolean;
    upserted: boolean;
    upsert: (name: string, price: number, id?: number) => Promise<Product | undefined>;
}

export const ProductListContext = React.createContext<ProductListContextProps>({
    upserting: false,
    upserted: false,
    upsert: async () => { return undefined; }
});

const ProductsListProvider: React.FC = ({ children }) => {

    const [upserting, setUpserting] = useState<boolean>(false);
    const [upserted, setUpserted] = useState<boolean>(false);

    const upsert = async (name: string, price: number, id?: number): Promise<Product | undefined> => {
        setUpserting(true);
        setUpserted(false);
        let product;
        try {
            product = await upsertProduct(name, price, id);
        } finally {
            setUpserting(false);
            setUpserted(true);
        }
        return product;
    }

    return <ProductListContext.Provider value={{
        upserting,
        upserted,
        upsert,
    }}>
        {children}
    </ProductListContext.Provider>;
}

export default ProductsListProvider;