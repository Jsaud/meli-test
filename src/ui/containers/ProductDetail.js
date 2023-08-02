import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//actions
import { fetchProductsDetailsRequest } from "../../actions";
//Components
import ProductCardTemplate from "../components/templates/ProductDetail";

const ProductDetail = () => {

  const { data } = useSelector((state) => state.productsDetail);
  const dispatch = useDispatch();
  
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductsDetailsRequest(productId));
  }, []);

  return (
    <>
      <ProductCardTemplate />
    </>
  );
};

export default ProductDetail;
