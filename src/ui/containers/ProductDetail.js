import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//actions
import { fetchProductsDetailsRequest } from "../../actions";
import NotFound from "../components/organism/NotFound";
//Components
import ProductCardTemplate from "../components/templates/ProductDetail";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.productsDetail);
  const { productId } = useParams();
  const product = data;

  const attributeIds = ["INTERNAL_MEMORY", "RAM", "COLOR"];
  const saleTermIds = ["INVOICE", "WARRANTY_TIME", "WARRANTY_TYPE"];

  const attributes = {};
  const saleTerms = {};

  attributeIds.map((id) => {
    attributes[id] = product?.attributes?.find((obj) => obj.id === id);
    return null;
  });

  saleTermIds.map((id) => {
    saleTerms[id] = product?.sale_terms?.find((obj) => obj.id === id);
    return null;
  });

  const {
    INTERNAL_MEMORY: internalMemory,
    RAM: ram,
    COLOR: color,
  } = attributes;
  const {
    INVOICE: invoice,
    WARRANTY_TIME: warranty,
    WARRANTY_TYPE: warrantyType,
  } = saleTerms;

  useEffect(() => {
    dispatch(fetchProductsDetailsRequest(productId));
  }, [productId]);

  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <ProductCardTemplate
          product={product}
          internalMemory={internalMemory}
          color={color}
          invoice={invoice}
          warranty={warranty}
          warrantyType={warrantyType}
        />
      )}
    </>
  );
};

export default ProductDetail;
