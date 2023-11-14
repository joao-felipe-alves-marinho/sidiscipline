import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AuthService } from '../services/api/auth/AuthService';

interface IAuthContextData {
    signup: (username: string, email: string, password: string) => void;
    login: (email: string, password: string) => Promise<boolean | void>;
    changePassword: (email: string, password: string) => void;
    emails: string[];
}

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const isAuthenticatedStored = JSON.parse(localStorage.getItem('isAuth')!);
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedStored);

    const [emails, setEmails] = useState<string[]>([]);

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

    useEffect(() => {
        AuthService.getEmails().then(result => {
            if (result instanceof Error) {
                console.log(result);
            } else {
                setEmails(result.emails);
            }
        });
    }, []);

    const handleChangePassword = useCallback(async (email: string, password: string) => {
        const result = await AuthService.changePassword(email, password);
        if (result instanceof Error) {
            console.log(result);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signup: handleSignUp,
            login: handleLogIn,
            emails: emails,
            changePassword: handleChangePassword,
        }} >
            {children}
        </AuthContext.Provider>
    );
};
