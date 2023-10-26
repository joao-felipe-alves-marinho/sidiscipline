import {
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const isDrawerOpenStored = JSON.parse(localStorage.getItem('isDrawerOpen')!);

    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(isDrawerOpenStored);

    useEffect(() => {
        localStorage.getItem('isDrawerOpen') == 'null' && setDrawerOpen(false);
        localStorage.setItem('isDrawerOpen', JSON.stringify(isDrawerOpen));
    }, [isDrawerOpen]);

    const toggleDrawer = useCallback(() => {
        setDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};