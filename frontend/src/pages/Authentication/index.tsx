import React, { useContext, useMemo } from 'react';
import { AuthenticationPageContext, AuthenticationPageContextProps } from '../../contexts/authentication/page';
import UnauthenticatedRoute from '../../components/UnauthenticatedRoute';
import Signin from './components/Signin';
import Signup from './components/Signup';

const Authentication: React.FC = () => {

    const { currentScreen } = useContext<AuthenticationPageContextProps>(AuthenticationPageContext);

    const renderedScreen = useMemo(() => {
        return currentScreen === 'signin' ? <Signin /> : <Signup />
    }, [currentScreen])

    return <UnauthenticatedRoute>
        {renderedScreen}
    </UnauthenticatedRoute>
}

export default Authentication;