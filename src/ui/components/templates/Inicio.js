import React from "react";
import PropTypes from "prop-types";

import Search from "../organism/Search";
import ProductCard from "../organism/ProductCard";

import ProductCardSkeleton from "./ProductCardSkeleton";

const InicioTemplate = ({
  loading,
  search,
  onSearchChange,
  handleSearchSubmit,
  productArray,
}) => {
  return (
    <>
      <div className="background-grey">
        <div className="container">
          {loading ? (
            <ProductCardSkeleton/>
          ) : (
            <>
              <div className="row justify-content-center"> 
                <div className="col-12 col-md-8 col-xl-6 col-xxl-6 ">
                  <Search
                    search={search}
                    onSearchChange={onSearchChange}
                    handleSearchSubmit={handleSearchSubmit}
                  />
                </div>
              </div>
              
              <ProductCard productArray={productArray} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

InicioTemplate.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  productArray: PropTypes.array.isRequired,
};

export default InicioTemplate;
