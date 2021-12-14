import { Box, SimpleGrid, Divider, VStack } from '@chakra-ui/layout';
import React, { useContext, useEffect } from 'react';

import { ProductListContextProps, ProductListContext } from '../../../../../contexts/products/list'
import ProductPagination from './components/ProductPagination';
import ProductFilter from './components/ProductFilter';
import ProductCard from './components/ProductCard';
import Loader from '../../../../../components/Loader';

const ProductsGrid: React.FC = () => {

    const {
        products, loadProducts, loadingProducts,
    } = useContext<ProductListContextProps>(ProductListContext);

    useEffect(() => {
        loadProducts();
        return () => { }
    }, [])

    return (
        <VStack
            spacing={4}
            align='stretch'
        >
            <Box>
                <ProductFilter />
            </Box>
            <Box>
                {loadingProducts
                    ? <Box mt="50" mb="50" w="100%" textAlign="center" ><Loader /></Box>
                    :
                    <SimpleGrid columns={[2, 2, 2, 4]} spacing={10}>
                        {
                            products?.map((product) => (
                                <Box><ProductCard product={product} /></Box>
                            ))
                        }
                    </SimpleGrid>
                }

            </Box>
            <Divider borderColor='gray.200' />
            <Box>
                <ProductPagination />
            </Box>
        </VStack>
    );
}

export default ProductsGrid;