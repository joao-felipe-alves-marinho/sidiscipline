import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AuthService } from '../services/api/auth/AuthService';

interface IAuthContextData {
    signup: (username: string, email: string, password: string) => void;
    login: (email: string, password: string) => Promise<boolean | void>;
}

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const isAuthenticatedStored = JSON.parse(localStorage.getItem('isAuth')!);
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedStored);

    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const handleSignUp = useCallback(async (username: string, email: string, password: string) => {
        const result = await AuthService.singUp(username, email, password);
        console.log(result);
    }, []);

    const handleLogIn = useCallback(async (email: string, password: string) => {
        const result = await AuthService.login(email, password);
        if (result instanceof Error) {
            return false;
        } else {
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result.user));
            setIsAuthenticated(true);
            return true;
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signup: handleSignUp, login: handleLogIn}} >
            {children}
        </AuthContext.Provider>
    );
};
