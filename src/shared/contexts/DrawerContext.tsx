import { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};