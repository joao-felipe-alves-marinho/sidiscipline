import {
    PropsWithChildren,
    createContext, useCallback,
    useContext,
    useState
} from 'react';

interface IAuthContextData {
    signup: (username: string, email: string, password: string) => void;
    login: (email: string, password: string) => void;
    isAuthenticated: boolean;
    useData: { username: string, email: string, password: string };
}

const AuthContext = createContext({} as IAuthContextData);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [useData, setUseData] = useState({
        username: 'admin',
        email: 'admin@admin',
        password: 'admin',
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignUp = useCallback((username: string, email: string, password: string) => {
        setUseData({
            username: username,
            email: email,
            password: password
        });
    }, []);

    const handleLogin = useCallback((email: string, password: string) => {
        if (email == useData.email && password == useData.password) {
            setIsAuthenticated(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider value={{ signup: handleSignUp, login: handleLogin, isAuthenticated, useData: useData }} >
            {children}
        </AuthContext.Provider>
    );
};
