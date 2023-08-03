import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { fetchProductsRequest } from "../../actions";
//Components
import HomeTemplate from "../components/templates/Home";

const Home = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);
  const productArray = data?.results;

  const products = ["Xiaomi", "Huawei", "samsung galaxy", "iphone", "motorola"];

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (search.trim() !== "") {
      dispatch(fetchProductsRequest(search));
    }
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
      <HomeTemplate
        loading={loading}
        search={search}
        productArray={productArray}
        onSearchChange={onSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
    </>
  );
};

export default Home;
