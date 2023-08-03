import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { fetchProductsRequest } from "../../actions";
//Components
import InicioTemplate from "../components/templates/Home";

const Inicio = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const productArray = data?.results;

  const products = [
    "zapatilla",
    "raquetas",
    "pelotas",
    "adidas",
    "padel",
    "tenis",
  ];

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchProductsRequest(search)); // Despachar la acción con el valor del campo de búsqueda
    setSearch("");
  };

  useEffect(() => {
    const getRandomProducts = () =>
      products[Math.floor(Math.random() * products.length)];
    const randomProducts = getRandomProducts();
    dispatch(fetchProductsRequest(randomProducts));
  }, []);

  return (
    <>
      <InicioTemplate
        loading={loading}
        search={search}
        productArray={productArray}
        onSearchChange={onSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
    </>
  );
};

export default Inicio;
