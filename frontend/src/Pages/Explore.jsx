import React, { useState, useEffect } from "react";
import FeaturedProducts from "../component/FeaturedProducts";

function Explore() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=10");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length == 0) {
    console.log("loading");
    return <div>Loading</div>;
  }

  return (
    <div>
      {data.products.map(product => (
        <FeaturedProducts key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Explore;
