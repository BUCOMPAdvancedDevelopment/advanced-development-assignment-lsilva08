import React, { createContext, useState } from 'react';

export interface AuthenticationContextProps {
    authenticated?: boolean;
    token?: string;
    user?: {
        id: number;
        email: string;
    };
    profile?: string;
    authenticate: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
}

export const AuthenticationContext = createContext<AuthenticationContextProps>({
    authenticate: async () => { },
    register: async () => { },
});


const AuthenticationProvider: React.FC = ({ children }) => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string>();
    const [user, setUser] = useState<{ id: number, email: string }>();
    const [profile, setProfile] = useState<string>('user');

    const authenticate = async (email: string, password: string) => {
        const userData = { token: 'fakeToken', user: { email: 'fakeEmail', id: 1 }, profile: 'admin' }
        setToken(userData.token);
        setUser(userData.user);
        setProfile(userData.profile);
        setAuthenticated(true);
    }

    const register = async (name: string, email: string, password: string) => {
        const userData = { token: 'fakeToken', user: { email: 'fakeEmail', id: 1 }, profile: 'admin' }
        setToken(userData.token);
        setUser(userData.user);
        setProfile(userData.profile);
        setAuthenticated(true);
    }

    return <AuthenticationContext.Provider value={{ authenticated, token, user, profile, authenticate, register }}>
        {children}
    </AuthenticationContext.Provider>;
}

export default AuthenticationProvider;