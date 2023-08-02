import React from "react";
import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Wrapper from "./StylesProductDetail";

const ProductCard = () => {

  const { data } = useSelector((state) => state);
  const productArray = data?.results;
  const { productId } = useParams();
  const product = productArray.find(
    (p) => p.id.toString().localeCompare(productId) === 0
  );

  return (
    <>
      <Wrapper>
        <div className="background-grey">
          <div className="container">
            <div className="row">

              <div className="col-4 mt-2">
                <Link to="/">Volver</Link>
              </div>

              <div className="col-12 mt-2 mb-3">
                <div className="card">
                  <div className="d-flex mt-4">

                    <div className="col-md-4 offset-md-1">
                      <img
                        height="300"
                        src={product.thumbnail}
                        className="mx-auto mt-3"
                        alt={product.title}
                      />
                    </div>

                    <div className="col-md-4">
                      <p className="mb-1 lighter-grey">
                        { product.condition == 'new'
                          ? 'Nuevo '
                          : 'Usado ' 
                        } 
                        | { product.sold_quantity }
                        { product.sold_quantity == '1'
                          ? ' vendido'
                          : ' vendidos' 
                        } 
                      </p>
                  
                      <h5>{product.title}</h5>
                      <p className="card-text">
                        <small className="text-muted">${product.price}</small>
                      </p>
                    </div>

                    <div className="col-md-3">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductCard;
