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

const AppRoutes: React.FC = () => {
    return <Router>
        <div>
            <AuthenticationProvider>
                <Routes>
                    <Route path="/" element={
                        <AuthenticationPageProvider>
                            <Authentication />
                        </AuthenticationPageProvider>
                    } />
                    <Route path="/products" element={<>
                        <Navbar>
                            <ProductsListProvider>
                                <ProductsList />
                            </ProductsListProvider>
                        </Navbar>
                    </>} />
                </Routes>
            </AuthenticationProvider>
        </div>
    </Router>
}

export default AppRoutes;