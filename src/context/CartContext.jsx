import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState("");
  const [cartTotal, setCartTotal] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("userCart")) {
      localStorage.setItem("userCart", JSON.stringify([]));
    } else {
      setCart(JSON.parse(localStorage.getItem("userCart")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(cart));
    const userCart = JSON.parse(localStorage.getItem("userCart"));
    const amount = userCart.reduce((acc, item) => acc + item.amount, 0);
    setCartAmount(JSON.stringify(amount));
  }, [cart]);

  useEffect(() => {
    const userCart = JSON.parse(localStorage.getItem("userCart"));
    const total = userCart.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );
    setCartTotal(JSON.stringify(total));
  }, [cart]);

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

  const remProduct = (e) => {
    const newCart = cart.filter((item) => item.id !== e.target.value);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount,
        setCart,
        clearCart,
        addToCart,
        remProduct,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
