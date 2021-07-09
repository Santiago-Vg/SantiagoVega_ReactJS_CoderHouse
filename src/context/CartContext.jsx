import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, amount) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, amount: cartItem.amount + amount };
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, amount }]);
    }
  };

  // const removeFromCart = (item) => {
  //   if (isInCart(item.id)) {
  //     const newCart = cart
  //       .map((cartItem) => {
  //         if (cartItem.id === item.id) {
  //           return { ...cartItem, amount: cartItem.amount - 1 };
  //         } else return cartItem;
  //       })
  //       .filter((cartItem) => cartItem.amount > 0);
  //     setCart(newCart);
  //   } else {
  //     setCart((prev) => [...prev, { ...item }]);
  //   }
  //   console.log(cart);
  // };

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
