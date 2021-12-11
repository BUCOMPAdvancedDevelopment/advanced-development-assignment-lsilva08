import React, { useContext } from 'react';
import {
    Navigate
} from "react-router-dom";
import { AuthenticationContext, AuthenticationContextProps } from '../../contexts/authentication';

const UnauthenticatedRoute: React.FC = ({ children }) => {

    const { authenticated } = useContext<AuthenticationContextProps>(AuthenticationContext);

    if (authenticated) {
        return <Navigate replace to="/home" />
    }

    return <>{children}</>;
}

export default UnauthenticatedRoute;