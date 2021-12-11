import React, { useContext } from 'react';
import { AuthenticationContext, AuthenticationContextProps } from '../../contexts/authentication';
import UnauthenticatedRoute from '../../components/UnauthenticatedRoute';

// import { Container } from './styles';

const Authentication: React.FC = () => {

    const { authenticated } = useContext<AuthenticationContextProps>(AuthenticationContext);

    return <UnauthenticatedRoute>
        <div>Logado: {authenticated ? "Sim" : "Não"}</div>
    </UnauthenticatedRoute>
}

export default Authentication;