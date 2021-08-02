// REACT
import React, { createContext, useState, useEffect } from "react";

export const SiteContext = createContext({});

export const SiteProvider = ({ children }) => {
  // NAVBAR RELATED CONTEXT //
  const [isInStore, setIsInStore] = useState(false);
  const [isInHome, setIsInHome] = useState(false);

  const [searchImput, setSearchImput] = useState("");
  const handleSearch = (e) => {
    setSearchImput(e.target.value);
  };

  // CART RELATED CONTEXT //
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

  // CART FUNCTIONS
  const isInCart = (id) => cart.some((item) => item.id === id);

  const clearCart = () => setCart([]);

  const addToCart = (item, amount) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, amount: cartItem.amount + amount };
        } else return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, amount }]);
    }
  };

  const remProduct = (e) => {
    const updatedCart = cart.filter(
      (item) => item.id !== e.target.parentElement.value
    );
    setCart(updatedCart);
  };

  // MODAL RELATED CONTEXT
  const [openModal, setOpenModal] = useState(false);
  const [qtyModal, setQtyModal] = useState(0);

  const handleModal = (amount) => {
    setQtyModal(amount);
    setOpenModal(!openModal);
  };

  return (
    <SiteContext.Provider
      value={{
        isInStore,
        setIsInStore,
        isInHome,
        setIsInHome,
        searchImput,
        setSearchImput,
        handleSearch,
        cart,
        cartAmount,
        setCart,
        clearCart,
        addToCart,
        remProduct,
        cartTotal,
        openModal,
        handleModal,
        qtyModal,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
