import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type PreloaderStatus = "loading" | "video" | "revealing" | "done";
type View = "home" | "vault";

interface PreloaderContextType {
    status: PreloaderStatus;
    setStatus: (status: PreloaderStatus) => void;
    view: View;
    setView: (view: View) => void;
    videoReady: boolean;
    setVideoReady: (ready: boolean) => void;
    reset: () => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: ReactNode }) {
    const [status, setStatus] = useState<PreloaderStatus>("loading");
    const [view, setView] = useState<View>(() => {
        // Initial detection
        return window.location.pathname.startsWith("/vault") ? "vault" : "home";
    });
    const [videoReady, setVideoReady] = useState(false);

    // Keep view in sync with location even on browser back/forward
    useEffect(() => {
        const handleLocationChange = () => {
            const currentView = window.location.pathname.startsWith("/vault") ? "vault" : "home";
            setView(currentView);
        };

        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    const reset = () => {
        setStatus("loading");
        setVideoReady(false);
    };

    return (
        <PreloaderContext.Provider value={{ status, setStatus, view, setView, videoReady, setVideoReady, reset }}>
            {children}
        </PreloaderContext.Provider>
    );
}

export function usePreloader() {
    const context = useContext(PreloaderContext);
    if (context === undefined) {
        throw new Error("usePreloader must be used within a PreloaderProvider");
    }
    return context;
}
