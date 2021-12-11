import React, { useContext } from 'react';
import { AuthenticationContext, AuthenticationContextProps } from '../../../contexts/authentication';
import Admin from './Admin';
import User from './User';

// import { Container } from './styles';

const OrderDetails: React.FC = () => {

    const { profile } = useContext<AuthenticationContextProps>(AuthenticationContext)

    return profile === 'admin' ? <Admin /> : <User />;
}

export default OrderDetails;