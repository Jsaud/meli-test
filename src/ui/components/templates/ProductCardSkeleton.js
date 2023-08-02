import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8 col-xl-6 col-xxl-6 ">
          <Skeleton width={300} height={24} />
        </div>
      </div>
    </>
  );
};

export default ProductCardSkeleton;

