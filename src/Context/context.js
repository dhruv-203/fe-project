import { createContext, useState, useEffect, useContext } from "react";

let WindowContext = createContext();

export default function Provider({ children }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return <WindowContext.Provider value={isMobile} >
        {children}
    </WindowContext.Provider>

}

export function useWindowSize() {
    return useContext(WindowContext)
}

