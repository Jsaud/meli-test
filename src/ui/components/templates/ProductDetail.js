import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import lightning from "../../assets/img/lightning.png"
import start from "../../assets/img/start.png"

import Wrapper from "../organism/StylesProductDetail";

const ProductCardTemplate = () => {

  const { data } = useSelector((state) => state.productsDetail);
  const product = data;

  const internalMemory = product.attributes.find(obj => {
    return obj.id === 'INTERNAL_MEMORY';
  });

  const ram = product.attributes.find(obj => {
    return obj.id === 'RAM';
  });

  const color = product.attributes.find(obj => {
    return obj.id === 'COLOR';
  });

  const invoice = product.sale_terms.find(obj => {
    return obj.id === 'INVOICE';
  });

  const warranty = product.sale_terms.find(obj => {
    return obj.id === 'WARRANTY_TIME';
  });

  const warrantyType = product.sale_terms.find(obj => {
    return obj.id === 'WARRANTY_TYPE';
  });

  return (
    <>
      { <Wrapper>
        <div className="background-grey">
          <div className="container">
            <div className="row">

              <div className="col-4 mt-2">
                <Link to="/">Volver</Link>
              </div>

              <div className="col-12 mt-2 mb-3">
                <div className="card">
                  <div className="d-flex mt-4">

                    <div className="col-md-4">
                      <img
                        width="250"
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
                      <h4 className="mb-4">${product.price}</h4>

                      {internalMemory &&
                        <div className="col-md-12">
                          <p className="mb-2">
                            {internalMemory.name}: {internalMemory.value_name}
                          </p>
                          <div className="d-flex">
                            {internalMemory.values?.map((value) => (
                              <p className={internalMemory.value_name == value.name ? 'btn-product-attr' : 'btn-product-attr-grey'}>
                                {value.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      }

                      {ram &&
                        <div className="col-md-12 mt-2">
                          <p className="mb-2">
                            {ram.name}: {ram.value_name}
                          </p>
                          <div className="d-flex">
                            {ram.values?.map((value) => (
                              <p className={ram.value_name == value.name ? 'btn-product-attr' : 'btn-product-attr-grey'}>
                                {value.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      }

                      {color &&
                        <div className="col-md-12 mt-2">
                          <p className="mb-2">
                            {color.name}: {color.value_name}
                          </p>
                          <div className="d-flex">
                            {color.values?.map((value) => (
                              <p className={color.value_name == value.name ? 'btn-product-attr' : 'btn-product-attr-grey'}>
                                {value.name}
                              </p>
                            ))}
                          </div>
                        </div>
                      }
                    </div>

                    <div className="col-md-3 br-product p-2">
                      {product.shipping.tags.includes('self_service_in') &&
                        <div className="col-md-4 mt-1 ms-1">
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
                      }

                      {product.official_store_id != 1938 &&
                        <div className="col-md-12 mt-1 ms-1">
                          <p className="mb-2">
                            Tienda oficial: <span className="c-ml-elec">Mercado Libre Electrónica</span>
                          </p>
                        </div>
                      }

                       {invoice &&
                        <div className="col-md-12 mt-2">
                          <p className="mb-2">
                            Hace {invoice.value_name}
                          </p>
                        </div>
                      }

                      <div className="col-md-12 mt-1 ms-1">
                        <p className="mb-2">
                          Cantidad: 1 Unidad
                          <span className="lighter-grey"> ({product.available_quantity} disponible)</span>
                        </p>
                      </div>

                      <div className="col-md-12 mt-5">
                         <button className="mb-2 btn-buy-now">Comprar ahora</button>
                      </div>

                     {warranty &&
                        <div className="col-md-12 mt-2">
                          <p className="mb-2 lighter-grey">
                            <img
                              src={start}
                              alt="compreLibre"
                              width="15"
                              height="15"
                            />
                            {warranty.value_name} de {warrantyType.value_name}.
                          </p>
                        </div>
                      }
                    </div>
                  </div>

                  <div className="col-md-10 offset-md-1 mt-4">
                    <h5>Características de : {product.title}</h5>
                  </div>
                  <div className="col-md-10 offset-md-1 mt-1">
                    <table class="table table-striped">
                      <tbody>
                        {product.attributes?.map((attr) => (
                          <tr>
                            <td>{attr.name}</td>
                            <td>{attr.value_name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>}
    </>
  );
};

export default ProductCardTemplate;
