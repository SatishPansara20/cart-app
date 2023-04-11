import React from "react";
import { Link } from "react-router-dom";

// import { imageURL } from "../../components/Utils";
import A from "../../assest/img/A.png";
import PropTypes from "prop-types";

let ProducSample = [];

for (let i = 0; i < 30; i++) {
  ProducSample.push({
    id: i + 1,
    // imageURL: "",
    prod_name: `${i} Product`,
    prod_price: "125",
  });
}

const SingleProduct = ({ AllProducts }) => {
  const products = AllProducts;

  SingleProduct.propTypes = {
    AllProducts: PropTypes.array,
  };

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="overscroll-contain mx-auto my-auto max-w-2xl py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-center uppercase tracking-tight text-gray-900">
            PRODUCTS
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product._id} className="relative">
                {/* Product Image */}
                <div className=" aspect-w-1 aspect-h-1  overflow-hidden rounded-md bg-gray-200 hover:opacity-75 lg:aspect-none">
                  <p>
                    <Link to={`viewproduct/${product._id}`}>
                      <img
                        // src={`${imageURL}${product.image}`}
                        src={A}
                        alt="product imaage"
                        //  className="max-w-full h-auto object-cover object-center lg:h-full lg:w-full"
                        className="h-full w-full object-contain"
                      />
                    </Link>
                  </p>
                </div>
                {/* Product Info */}
                <div
                  className="p-2  rounded-md
                 bg-gray-300 mt-4 flex flex-wrap justify-between items-center"
                >
                  {/* prod_name */}
                  <div className="flex flex-col flex-wrap">
                    <h3 className="relative text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.prod_name}
                    </h3>
                    <p className=" flex-wrap mt-1 text-sm text-gray-500">
                      In Stock: {product.prod_quantity}
                    </p>
                  </div>

                  {/* prod_price */}
                  <p className="p-2 text-sm font-medium text-gray-900">
                    ${product.prod_price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
