import React, { useState, useEffect } from "react";
import FeaturedProducts from "../component/FeaturedProducts";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TrendingProducts from "../component/TrendingProducts";

function Explore() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=4&skip=6");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length == 0) {
    return <div>Loading</div>;
  }

  return (
    <div className="mx-6">
      <Header/>
      <h1 className="text-2xl font-bold my-12 text-center">Featured Products</h1>
      {data.products.map(product => (
        <FeaturedProducts key={product.id} product={product} />
      ))}
      <h1 className="text-2xl font-bold my-12 text-center">Trending Products</h1>
      <TrendingProducts />
      <Footer/>
    </div>
  );
}

export default Explore;
