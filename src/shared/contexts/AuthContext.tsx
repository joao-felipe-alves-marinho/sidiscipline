import {
    PropsWithChildren,
    createContext, useCallback,
    useContext,
    useEffect,
    useState
} from 'react';

interface IAuthContextData {
    signup: (username: string, email: string, password: string) => void;
    login: (email: string, password: string) => boolean;
    isAuthenticated: boolean;
    useData: { username: string, email: string, password: string };
}

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const isAuthenticatedStored = JSON.parse(localStorage.getItem('isAuth')!);
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedStored);

    const admin = {
        username: 'admin',
        email: 'admin@admin',
        password: 'admin'
    };
    const userDataStored = JSON.parse(localStorage.getItem('user') || JSON.stringify(admin));
    const [userData, setUserData] = useState(userDataStored);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userData));
    }, [userData]);

    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const handleSignUp = useCallback((username: string, email: string, password: string) => {
        setUserData({
            username: username,
            email: email,
            password: password
        });
    }, []);

    const handleLogIn = useCallback((email: string, password: string) => {
        if (email == userData.email && password == userData.password) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }, [userData.email, userData.password]);

    return (
        <AuthContext.Provider value={{ signup: handleSignUp, login: handleLogIn, isAuthenticated, useData: userData }} >
            {children}
        </AuthContext.Provider>
    );
};
