import React, { createContext, useState } from 'react';
import { SigninResponse } from '../../contracts/authentication';
import { signin, signup } from '../../services/authentication.service';

export interface AuthenticationContextProps {
    authenticated?: boolean;
    token?: string;
    user?: {
        id: number;
        email: string;
    };
    profile?: string;
    authenticating: boolean;
    authenticate: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
}

export const AuthenticationContext = createContext<AuthenticationContextProps>({
    authenticate: async () => { },
    register: async () => { },
    authenticating: false,
});


const AuthenticationProvider: React.FC = ({ children }) => {

    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string>();
    const [user, setUser] = useState<{ id: number, email: string }>({ id: 1, email: 'test' });
    const [profile, setProfile] = useState<string>('');

    const authenticate = async (email: string, password: string) => {
        setAuthenticating(true);
        const response = await signin(email, password);
        fillSigninData(response);
        setAuthenticating(false);
    }

    const register = async (name: string, email: string, password: string) => {
        setAuthenticating(true);
        const response = await signup(name, email, password);
        fillSigninData(response);
        setAuthenticating(false);
    }

    const fillSigninData = (response: SigninResponse) => {
        setToken(response.token);
        setUser(response.user);
        setProfile(response.user.profile);
        setAuthenticated(true);
    }

    return <AuthenticationContext.Provider value={{ authenticated, token, user, profile, authenticate, register, authenticating }}>
        {children}
    </AuthenticationContext.Provider>;
}

export default AuthenticationProvider;