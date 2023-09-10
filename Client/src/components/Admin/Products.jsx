import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center m-3 ">
      {products?.map((item) => (
        <Card className=" rounded-3xl shadow-2xl mx-3 bg-grey-100 hover:bg-stone-500">
          <img
            className="w-[200px] h-[200px] rounded-3xl"
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${item._id}`}
          />
          <p>{item?.name}</p>
          <p>{item?.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default Products;
