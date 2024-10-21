import { createContext, useState, useEffect, useContext } from "react";

let WindowContext = createContext();

export default function Provider({ children }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [cart, setCart] = useState([])

    function addToCart(prod) {
        console.log(prod)
        setCart([...cart, prod])
        return prod
    }

    function removeFromCart(prodID) {
        setCart(cart.filter((prod) => prod.prodID !== prodID))
        return prodID
    }

    function getQuantity(prodID) {
        let prod = cart.find((val) => val.id === prodID)
        return prod ? prod.prodQuant : -1
    }

    function getProds() {
        return [...cart]
    }

    function productExists(prodID, prodColor) {
        let check = false
        check = cart.some((prod) => (prod.prodID === prodID && prod.prodColor === prodColor))
        return check
    }

    function getCount() {
        return cart.length
    }

    function updateCart(prodID, prodColor) {
        setCart(cart.map((val) => {
            if ((val.prodID === prodID && val.prodColor === prodColor)) {
                return { ...val, prodQuant: val.prodQuant + 1 }
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

    return <WindowContext.Provider value={{
        isMobile,
        cart: {
            getProds,
            getCount,
            addToCart,
            removeFromCart,
            productExists,
            updateCart,
            getQuantity
        }
    }} >
        {children}
    </WindowContext.Provider>

}

export function useCart() {
    return useContext(WindowContext).cart
}

export function useWindowSize() {
    return useContext(WindowContext)
}

