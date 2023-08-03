import React from "react";
import PropTypes from "prop-types";

import Search from "../organism/Search";
import ProductCard from "../organism/ProductCard";

const HomeTemplate = ({
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
        </div>
      </div>x
    </>
  );
};

HomeTemplate.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  productArray: PropTypes.array,
};

export default HomeTemplate;
