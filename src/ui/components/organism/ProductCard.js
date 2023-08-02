import React from "react";
import { Link } from 'react-router-dom';

import lightning from "../../assets/img/lightning.png"

import Wrapper from "./StylesProductCard";


const ProductCard = ({ productArray }) => {
  return (
    <>
      <Wrapper>
        <div className="row">
          {productArray?.map((product) => (
            <div className="col-12 col-md-6 col-xl-4 col-xxl-3">
              <Link to={`/product/${product.id}`} key={product.id} className="disabled-link">
                <div className="card m-3 mx-md-0 bg-body rounded">
                  <img
                    width="160"
                    height="180"
                    src={product.thumbnail}
                    className="mx-auto mt-3"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h6 className="card-title mb-3">{product.title}</h6>
                    <p className="card-subtitle mb-2 fs-5">$ {product.price}</p>

                    <div className="d-flex">
                      <div className="col-md-4">
                        { product.shipping.free_shipping 
                          ? <p className="mb-2 btn-free-shipping">Envío gratis</p>
                          : '' 
                        } 
                      </div>
                      { product.shipping.tags.includes('self_service_in')
                        ? <div className="col-md-4">
                            <p className="mb-2 full-flex">
                              <img
                                src={lightning}
                                alt="compreLibre"
                                width="25"
                                height="25"
                              />
                              FULL
                            </p>
                          </div>
                        : '' 
                      } 
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default ProductCard;
