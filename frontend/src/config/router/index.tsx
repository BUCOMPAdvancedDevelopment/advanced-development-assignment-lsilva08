import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import AuthenticationProvider from '../../contexts/authentication';
import AuthenticationPageProvider from '../../contexts/authentication/page';
import ProductsListProvider from '../../contexts/products/list';
import Authentication from '../../pages/Authentication';
import Navbar from '../../components/Navbar';
import ProductsList from '../../pages/Products/List';
import ProductDetailsContextProvider from '../../contexts/products/details';
import ProductsDetail from '../../pages/Products/Detail';

const AppRoutes: React.FC = () => {
    return <Router>
        <AuthenticationProvider>
            <Routes>
                <Route path="/" element={
                    <AuthenticationPageProvider>
                        <Authentication />
                    </AuthenticationPageProvider>
                } />
                <Route path="/products" element={
                    <Navbar>
                        <ProductsListProvider>
                            <ProductsList />
                        </ProductsListProvider>
                    </Navbar>
                } />
                <Route path="/products/:productId" element={
                    <Navbar>
                        <ProductDetailsContextProvider>
                            <ProductsDetail />
                        </ProductDetailsContextProvider>
                    </Navbar>
                } />
            </Routes>
        </AuthenticationProvider>
    </Router>
}

export default AppRoutes;