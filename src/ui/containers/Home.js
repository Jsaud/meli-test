import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { fetchProductsRequest } from "../../actions";
//Components
import NotFound from "../components/organism/NotFound";
import HomeTemplate from "../components/templates/Home";

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const productArray = data?.results;

  const products = [
    "raquetas",
    "pelotas tenis",
    "accesorios tenis",
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

  useEffect(() => {
    if(productArray?.length === 0){
      setError(true)
    }
  }, [productArray]);


  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <HomeTemplate
          loading={loading}
          search={search}
          productArray={productArray}
          onSearchChange={onSearchChange}
          handleSearchSubmit={handleSearchSubmit}
        />
      )}
    </>
  );
};

export default Home;
