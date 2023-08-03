import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//actions
import { fetchProductsDetailsRequest } from "../../actions";
//Components
import ProductCardTemplate from "../components/templates/ProductDetail";

const ProductDetail = () => {
  const dispatch = useDispatch();
  
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductsDetailsRequest(productId));
  }, [productId]);

  return (
    <>
      <ProductCardTemplate />
    </>
  );
};

export default ProductDetail;
