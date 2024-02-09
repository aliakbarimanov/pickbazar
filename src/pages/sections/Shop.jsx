// import icons
import { FaAngleRight } from "react-icons/fa";

// import components
import ProductCard from "../../components/ProductCard";

// import hooks
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://64.226.66.94/api/categories/");
      const data = await response.json();

      setCategories(data);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://64.226.66.94/api/products/`);
      const data = await response.json();

      setProducts(data.products);
    };

    getProducts();
  }, []);

  return (
    <section id="shop" className="shop">
      <div className="container">
        <ul className="categoryList">
          {categories.map((category) => (
            <li className="categoryItem">
              <button>
                <span>{category.title}</span>
                <FaAngleRight />
              </button>
            </li>
          ))}
        </ul>

        <div className="productList">
          {products.map((product, ind) => (
            <ProductCard data={product} key={ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
