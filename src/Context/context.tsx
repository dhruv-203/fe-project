import { createContext, useState, useEffect, useContext, ReactNode } from "react";

export interface CartItem {
    img: string,
    prodID: string,
    prodName: string,
    prodPrice: number,
    prodQuant: number,
    prodColor: string
}

interface WindowContextType {
    isMobile: boolean,
    cart: Cart
}

interface Cart {
    getProds: () => CartItem[],
    getCount: () => number,
    addToCart: (prod: CartItem) => CartItem,
    removeFromCart: (prodID: string, prodColor: string) => void,
    productExists: (prodID: string, prodColor: string) => boolean,
    updateCart: (prodID: string, prodColor: string, Quant: number) => void,
    getQuantity: (prodID: string, prodColor: string) => number
}




let WindowContext = createContext<WindowContextType>({
    isMobile: false,
    cart: {
        getProds: () => [],
        getCount: () => 0,
        addToCart: () => ({ img: "", prodID: "", prodColor: "", prodName: "", prodPrice: 0, prodQuant: 0 }),
        removeFromCart: () => { },
        productExists: () => false,
        updateCart: () => { },
        getQuantity: () => 0,
    }
});

export default function Provider({ children }: { children: ReactNode }): JSX.Element {
    const [isMobile, setIsMobile] = useState<boolean>(typeof window !== "undefined" ? (window.innerWidth <= 768) : false);
    const [cart, setCart] = useState<CartItem[]>([])

    function addToCart(prod: CartItem): CartItem {
        setCart([...cart, prod])
        return prod
    }

    function removeFromCart(prodID: string, prodColor: string): void {
        setCart([...cart.filter((prod) => {
            return !((prod.prodID === prodID) && (prod.prodColor === prodColor));
        })])
    }

    function getQuantity(prodID: string, prodColor: string): number {
        let prod = cart.find((val) => (val.prodID === prodID && val.prodColor === prodColor))
        return prod ? prod.prodQuant : 0
    }

    function getProds() {
        return [...cart]
    }

    function productExists(prodID: string, prodColor: string) {
        let check = false
        check = cart.some((prod) => (prod.prodID === prodID && prod.prodColor === prodColor))
        return check
    }

    function getCount() {
        return cart.reduce((acc, curr) => (acc + curr.prodQuant), 0)
    }

    function updateCart(prodID: string, prodColor: string, Quant: number): void {
        setCart(cart.map((val) => {
            if ((val.prodID === prodID && val.prodColor === prodColor)) {
                return { ...val, prodQuant: Quant }
            }
            else {
                return val
            }
        }))
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return <WindowContext.Provider value={
        {
            isMobile: isMobile,
            cart: {
                getProds,
                getCount,
                addToCart,
                removeFromCart,
                productExists,
                updateCart,
                getQuantity
            }
        }
    } >
        {children}
    </WindowContext.Provider>

}

export function useCart(): Cart {
    return useContext(WindowContext).cart
}

export function useWindowSize(): WindowContextType {
    return useContext(WindowContext)
}

