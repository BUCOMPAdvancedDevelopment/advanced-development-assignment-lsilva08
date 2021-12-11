import React from 'react';
import AuthenticatedRoute from '../../components/AuthenticatedRoute';
import { AuthenticationContext, AuthenticationContextProps } from '../../contexts/authentication';

// import { Container } from './styles';

const Home: React.FC = () => {

    const { profile } = React.useContext<AuthenticationContextProps>(AuthenticationContext);


    return <AuthenticatedRoute>
        <div>Page: {profile === 'admin' ? "Admin page" : "User page"}</div>
    </AuthenticatedRoute>
}

export default Home;