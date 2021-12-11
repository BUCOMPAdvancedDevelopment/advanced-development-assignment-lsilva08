import React, { useMemo, useState } from 'react';
import * as _ from 'lodash';
import { Product } from '../../../typings';
import { findProducts } from '../../../services/products.service';

export interface ProductListContextProps {
  products: Product[];
  loadingProducts: boolean;
  currentPage: number;
  pages: number;
  changePage: (nextPage: number) => void;
  filterProductsList: (filter: string) => void;
  loadProducts: () => Promise<void>;
}

export const ProductListContext = React.createContext<ProductListContextProps>({
  products: [],
  loadingProducts: false,
  currentPage: 0,
  pages: 1,
  changePage: () => { },
  filterProductsList: () => { },
  loadProducts: async () => { },
});

const ProductsListProvider: React.FC = ({ children }) => {

  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pages, setPages] = useState<number>(1);
  const [filter, setFilter] = useState<string>('');

  const loadProducts = async () => {
    setLoadingProducts(true);
    const foundProducts = await findProducts();
    setProducts(foundProducts);
    setLoadingProducts(false);
  }

  const filteredProducts = useMemo(() => {
    const productsChunked = _.chunk(
      products.filter(product => filter ? product.name.includes(filter) : true),
      8
    );
    setPages(productsChunked.length);
    return productsChunked[currentPage];
  }, [filter, products, currentPage])

  const changePage = (nextPage: number) => setCurrentPage(nextPage);

  const filterProductsList = (filter: string) => setFilter(filter);

  return <ProductListContext.Provider value={{
    products: filteredProducts,
    loadingProducts,
    currentPage,
    changePage,
    filterProductsList,
    loadProducts,
    pages
  }}>
    {children}
  </ProductListContext.Provider>;
}

export default ProductsListProvider;