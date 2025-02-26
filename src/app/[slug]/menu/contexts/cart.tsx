"use client";

import { Product } from "@prisma/client";
import React, { createContext, ReactNode, useState } from "react";

export interface CartProduct extends 
Pick<Product, "id" | "name" | "price" | "imageUrl"> {
    quantity: number;
}

export interface ICartContext {
    isOpen: boolean;
    total: number,
    products: CartProduct[];
    toggleCart: () => void;
    addProduct: (product: CartProduct) => void;
    decreaseProductQuantity: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
    removeProduct: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    total: 0,
    products: [],
    toggleCart: () => {},
    addProduct: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const total = products.reduce((acc, product ) => {
        return acc + product.price * product.quantity;
    }, 0)
    const toggleCart  = () => {
        setIsOpen(prev => !prev)
    };

    const addProduct = (product: CartProduct) =>{
        const productIsAlredyOnTheCart = products.some(prevProduct => prevProduct.id === product.id)
        if (!productIsAlredyOnTheCart) {
            return setProducts((prev) => [...products, product]);
        }
        setProducts(prevProducts => {
            return prevProducts.map(prevProduct => {
                if (prevProduct.id === product.id) {
                    return {
                        ...prevProduct,
                        quantity: prevProduct.quantity + product.quantity
                    }
                }
                return prevProduct
            });
        });
    };
    const decreaseProductQuantity = (productId: string) => {
        setProducts(prevProducts => {
            return prevProducts.map(prevProduct => {
                if (prevProduct.id !== productId) {
                    return prevProduct
                }
                if (prevProduct.quantity === 1) {
                    return prevProduct
                }
                return {...prevProduct, quantity: prevProduct.quantity -1 };
            });
        });
    };
    const increaseProductQuantity = (productId: string) => {
        setProducts(prevProducts => {
            return prevProducts.map(prevProduct => {
                if (prevProduct.id !== productId) {
                    return prevProduct
                }
                return {...prevProduct, quantity: prevProduct.quantity +1 };
            });
        });
    };
    const removeProduct = (productId: string) => {
        setProducts(prevProducts => prevProducts.filter(prevProduct => prevProduct.id !== productId));
    };

    return (
       <CartContext.Provider 
       value={{
        isOpen,
        total,
        products,
        toggleCart,
        addProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProduct,
       }}
       >

       {children}
       </CartContext.Provider>
    );
};
