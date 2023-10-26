import {
    PropsWithChildren,
    createContext, useCallback,
    useContext,
    useState
} from 'react';

interface IAuthContextData {
    signup: (username: string, email: string, password: string) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    isAuthenticated: boolean;
    useData: { username: string, email: string, password: string };
}

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [useData, setUseData] = useState({
        username: 'admin',
        email: 'admin@admin',
        password: 'admin',
    });


    const handleSignUp = useCallback((username: string, email: string, password: string) => {
        setUseData({
            username: username,
            email: email,
            password: password
        });
    }, []);

    const handleLogIn = useCallback((email: string, password: string) => {
        if (email == useData.email && password == useData.password) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }, [useData.email, useData.password]);

    const handleLogOut = useCallback(() => {
        setIsAuthenticated(false);
    }, []);


    return (
        <AuthContext.Provider value={{ signup: handleSignUp, login: handleLogIn, logout: handleLogOut, isAuthenticated, useData: useData }} >
            {children}
        </AuthContext.Provider>
    );
};
